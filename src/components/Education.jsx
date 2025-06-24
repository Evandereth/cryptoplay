import "../css/edu.css"
import img5 from "../assets/img6.png"
import { useState } from "react"

function Education(){

    const[active, setActive] = useState(false)

    function toggleClick(){
        setActive((prev)=>!prev)
    }

    return(
        <div className="education">
            <div className="education-wrapper">
                <div className="top-section">
                <div className="content-heading">
                    <h1>
                        A new way to learn & acquire financial knowledge
                    </h1>
                </div>
                <div className="content-text">
                    <p>
                        We made sure you have every access to a comprehensive range of global services. our aim is to provide you with a seamless learning process that caters to your financial needs regardless of your location.
                    </p>
                </div>
                </div>

                <div className="bottom-section">
                    <div className="bottom-wrapper">
                        <div className={active ? "wrap-clicked" : "wrap"}>
                            <div className="wrap-text">
                                <h1>
                                    the title
                                </h1>

                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti assumenda doloremque dicta nihil facilis a corporis.
                                </p>

                                <div className="btn">
                                    <button onClick={toggleClick}>Read More <span     class="material-symbols-outlined">
                                        arrow_right_alt
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="wrap-image">
                                <div className="image">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="wrap">
                            <div className="wrap-text">
                                <h1>
                                    the title
                                </h1>

                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti assumenda doloremque dicta nihil facilis a corporis.
                                </p>

                                <div className="btn">
                                    <button>Read More <span     class="material-symbols-outlined">
                                        arrow_right_alt
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="wrap-image">
                                <div className="image">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="wrap">
                            <div className="wrap-text">
                                <h1>
                                    the title
                                </h1>

                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti assumenda doloremque dicta nihil facilis a corporis.
                                </p>

                                <div className="btn">
                                    <button>Read More <span     class="material-symbols-outlined">
                                        arrow_right_alt
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="wrap-image">
                                <div className="image">
                                    <img src={img5} alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Education