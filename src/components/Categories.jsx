import "../css/categories.css"
import img1 from "../assets/img3.png"
import img2 from "../assets/img4.png"
import img3 from "../assets/img5.png"


function Categories(){
    return(
        <div className="categories-wrapper">
            <div className="categories">
                <div className="each-cat">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="title">
                        <h1>Engaging GameFi</h1>
                    </div>
                    <div className="content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem optio aperiam omnis provident cumque placeat possimus rem unde a saepe! Tempore cum fugiat obcaecati aliquid at enim unde! In, facere.</p>
                    </div>
                </div>

                <div className="each-cat">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="title">
                        <h1>Understanding DeFi</h1>
                    </div>
                    <div className="content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem optio aperiam omnis provident cumque placeat possimus rem unde a saepe! Tempore cum fugiat obcaecati aliquid at enim unde! In, facere.</p>
                    </div>
                </div>

                <div className="each-cat">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="title">
                        <h1>Retard Degenerates</h1>
                    </div>
                    <div className="content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem optio aperiam omnis provident cumque placeat possimus rem unde a saepe! Tempore cum fugiat obcaecati aliquid at enim unde! In, facere.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categories