import './heroDetails.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Props{
  nameArray: string[],
  setNameArray: React.Dispatch<React.SetStateAction<string[]>>,
  imageArray: string[]
}
// const HeroDetails = ({nameArray, setNameArray, imageArray}) => {
const HeroDetails: React.FC<Props> = ({nameArray, setNameArray, imageArray}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const ID = Number(id);
    const HandleChange = (event: { target: { value: any; }; }) => {
        const updateArray = [...nameArray];
        updateArray[ID]=event.target.value;
        setNameArray(updateArray.map(hero => hero));
    }
    const HandleSubmit = () => {
            navigate('/heroes');
    }
    return ( 
    <div id="heroDetails">
      <div id="headingDetail">HERO'S NAME: { nameArray[ID] }</div>
      <form id="nameForm" onSubmit={HandleSubmit}>
        <div>Change Name: </div>
        <input type="text" value={ nameArray[ID] } onChange={HandleChange}/>
        <button>Submit</button>
      </form>
    </div> 
    );
}
 
export default HeroDetails;