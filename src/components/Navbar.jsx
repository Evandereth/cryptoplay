import "../css/navbar.css"
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>CryptoPlay</h1>
                </div>

                <div className="content">
                        <ul>
                        <li><a href="">about us</a></li>
                        <li><a href="">cryptocurrency education</a></li>
                        <li><a href="">cryptocurrency market</a></li>
                        <li><a href="">faq</a></li>
                    </ul>
                    <div className="btn">
                        <button>sign up</button>
                        <button className="active">sign in</button>
                    </div>
                </div>
                
                <div className="icon">
                    <GiHamburgerMenu className="menu show"/>
                    <FaTimes className="menu cancel"/>
                </div>
            </nav>
        </>
    )
}
export default Navbar