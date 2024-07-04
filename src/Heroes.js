import './heroes.css';
import { Link } from 'react-router-dom';


const Heroes = ({nameArray, imageArray}) => {

    

    return ( <div id="heroes">
        <Link id="goBackToHomeLink2" to="/home"><div id="goBackToHome2">Back</div></Link>
        {nameArray
                  .map((hero, index) => {
                    return (
                        <Link id="heroesLink" to={`/heroes/hero/${index}`}><div className="Hero2" >
                            <div className="HeroName2">{hero}</div>
                            <div className="HeroLogo2"><img src={imageArray[index]}  alt="" /></div>
                        </div></Link>
                    )
                  })}
    </div> );
}
 
export default Heroes;