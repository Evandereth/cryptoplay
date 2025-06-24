import "../css/testimonial.css"
import { RiDoubleQuotesR } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";


function Testimonial(){
    return(
        <div className="testimonial">
            <div className="testi-wrapper">
                <h2>
                    80% of our students have declared their financial independence in crypto through the acquisition of fundamental skills and knowledge from <span>Cryptoplay</span>.
                </h2>
                <p>
                    Below are some of the reviews past and current students left on the our <a href="#">App Store</a> and <a href="#">Google Play</a>
                </p>
                <div className="testi-wrap">
                    <div className="thecontent">
                        <RiDoubleQuotesR className="theIcon"/>
                        <p>
                            CryptoPlay has been a game-changer for me The adaptive games makes crypto learning enjoyable, and the personalized practice sheets are a lifesaver. 
                        </p>
                        <div className="name">
                            <p>JahJah Reeskie <a href="#">Apple Store</a></p>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <CiStar />
                            </div>
                        </div>
                    </div>

                    <div className="thecontent">
                        <RiDoubleQuotesR className="theIcon"/>
                        <p>
                            The practice sheets are helping me get better at terminologies, and the analogies are super fun. I can even tell my own stories sometimes! Crypto makes me look forward to learning more Crypto stuff. 
                        </p>
                        <div className="name">
                            <p>Kowalsky Chang <a href="#">App Store</a></p>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                
                            </div>
                        </div>
                    </div>

                    <div className="thecontent">
                        <RiDoubleQuotesR className="theIcon" />
                        <p>
                            Balancing 9-5 with crypto can be challenging, but CryptoPlay has been a game-changer for me too. The outline covers a range of categories, making learning diverse and engaging.
                        </p>
                        <div className="name">
                            <p>Jemimah Adams <a href="#">Google Play</a></p>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalf />
                                <CiStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial