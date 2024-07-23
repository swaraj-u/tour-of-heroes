import './homeNavbar.css';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
    return ( <div id="HomeNavbar">
        <Link id="dashboardLink"to="/dashboard"><div id="Dashboard"className="options">Dashboard</div></Link>
        <Link id="heroesLink" to="/heroes"><div id="Heroes"className="options">Heroes</div></Link>
    </div> );
}
 
export default HomeNavbar;