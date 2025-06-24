import "../css/navbar.css"
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar(){

    const [menu, setMenu] = useState("content hideMenu")
    const [cancel, setCancel] = useState("menu cancel")
    const [burger, setBurger] = useState("menu show")

    function showMenu(){
        setMenu("content showMenu")
        setBurger("menu cancel")
        setCancel("menu show")
    }
    function hideMenu(){
        setMenu("content hideMenu")
        setCancel("menu cancel")
        setBurger("menu show")
    }


    return(
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>CryptoPlay</h1>
                </div>

                <div className={menu}>
                        <ul className="navMenu">
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
                    <GiHamburgerMenu className={burger} onClick={showMenu}/>
                    <FaTimes className={cancel} onClick={hideMenu}/>
                </div>
            </nav>
        </>
    )
}
export default Navbar