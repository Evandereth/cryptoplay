import "../css/footer.css"
import logo from '../assets/logo.png'

function Footer(){
    return(
        <footer>
            <div className="topfooter">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>CryptoPlay</h1>
                </div>

                <ul>
                    <li><a href="">about us</a></li>
                    <li><a href="">cryptocurrency education</a></li>
                    <li><a href="">cryptocurrency market</a></li>
                    <li><a href="">faq</a></li>
                </ul>

                <div className="contact">
                    <a href="">info@cryptoplay.com</a>
                </div>
            </div>

            <div className="bottomfooter">
                <p>
                    &copy 2025 Cryptoplay. All Rights Reserved | developed by <a href="#">Evander</a>
                </p>
                <div className="terms">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Docs</a>
                </div>
            </div>
        </footer>
    )    
}
export default Footer