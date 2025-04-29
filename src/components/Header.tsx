import { Link } from "react-router-dom";
import About from './../screens/About';
import Home from './../screens/Home';


function Header(){
    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;