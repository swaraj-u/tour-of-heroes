import './heroDetails.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const HeroDetails = ({nameArray, setNameArray, imageArray}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const HandleChange = (event) => {
        const updateArray = [...nameArray];
        updateArray[id]=event.target.value;
        setNameArray(updateArray.map(hero => hero));
    }
    const HandleSubmit = () => {
        
            navigate('/heroes');
        
    }
    return ( 
    <div id="heroDetails">
      <div id="headingDetail">HERO'S NAME: { nameArray[id] }</div>
      <form id="nameForm" onSubmit={HandleSubmit}>
        <div>Change Name: </div>
        <input type="text" value={ nameArray[id] } onChange={HandleChange}/>
        <button>Submit</button>
      </form>
    </div> 
    );
}
 
export default HeroDetails;