import { Link, useNavigate } from "react-router-dom";
import About from './../screens/About';
import Home from './../screens/Home';


function Header(){
    const navigate = useNavigate();
    const onAboutClick = () => {
        navigate("/about");
    }
    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <button onClick={onAboutClick}>About</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;