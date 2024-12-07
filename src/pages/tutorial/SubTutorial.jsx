import React from "react";
import "../../assets/css/tutorial/MainTutorial.css"
import order from "../../assets/images/tutorial/tut5.png";
import mainimg from "../../assets/images/tutorial/sub_tut.png";
import { Link } from "react-router-dom";

const SubTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
        {/* Skip 버튼 */}
        <Link to="/login" className="skipbtn">
                Skip
            </Link>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">클릭으로 빠르고 쉽게</div>
            <div className="tutorial-content">한 번의 터치로 빠르게 정보를 찾아봐요.</div>
            <img src={mainimg} alt="mainimg" className="main-img" />
        </div>
    );
}

export default SubTutorial;