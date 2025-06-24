import "../css/hero.css"
import heroImage from "../assets/hero.png"
import { FaArrowRight } from "react-icons/fa6";

function Hero(){
    return(
        <>
            <div className="hero-wrapper">
                <div className="floatText">
                    <h2>unlock the future with</h2>
                    <h1>crypto</h1>
                </div>
                <div className="hero-text">
                    <p>
                        Transforming crypto into playful adventures. Step into future: Empower yourself with cryptocurrency! Embrace the innovation, secure your wealth and build a brighter tomorrow.
                    </p>
                    <div className="cta">
                        <button>discover now 
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </>
    )
}
export default Hero