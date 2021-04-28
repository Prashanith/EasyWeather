import './Navbar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    const title="Easy Weather";
    return (
        <div className="NavBar">
        <header>
            <div className="appTitle">
                <Link to="/">{title}</Link>
            </div>            

            <div className="navigation">
                <Link to="/about" className="tile">About</Link>
            </div>      
        </header>

        </div>
    );    
}

export default NavBar