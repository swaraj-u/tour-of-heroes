import './dashboard.css';
import { Link } from 'react-router-dom';

interface Props{
    nameArray:string[],
    imageArray:string[]
}

const Dashboard: React.FC<Props> = ({nameArray, imageArray}) => {
    return ( <div id="dashboard">
        <Link id="goBackToHomeLink" to="/home"><div id="goBackToHome">Back</div></Link>
        {nameArray.filter((hero, index) => index<4)
                  .map((hero, index) => {
                    return (
                        <div className="Hero" >
                            <div className="HeroName">{hero}</div>
                            <div className="HeroLogo"><img src={imageArray[index]}  alt="" /></div>
                        </div>
                    )
                  })}
    </div> );
}
 
export default Dashboard;