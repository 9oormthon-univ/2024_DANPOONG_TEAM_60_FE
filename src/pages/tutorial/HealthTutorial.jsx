import React from "react";
import "../../assets/css/tutorial/MainTutorial.css"
import order from "../../assets/images/tutorial/tut3.png";
import mainimg from "../../assets/images/tutorial/health_tut.png";

const HealthTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">무료 진료소 위치를 쉽게 터치로</div>
            <div className="tutorial-content">무료 진료소를 통해 건강을 체크해봐요.</div>
            <img src={mainimg} alt="mainimg" className="main-img" />
        </div>
    );
}

export default HealthTutorial;