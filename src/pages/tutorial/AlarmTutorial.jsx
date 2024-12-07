import React from "react";
import "../../assets/css/tutorial/MainTutorial.css"
import order from "../../assets/images/tutorial/tut7.png";
import mainimg from "../../assets/images/tutorial/alarm_tut.png";

const AlarmTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">편하게 푸시 알림으로</div>
            <div className="tutorial-content">앱에 접속하지 않아도 자동으로 알림을 받아요.</div>
            <img src={mainimg} alt="mainimg" className="main-img" />
        </div>
    );
}

export default AlarmTutorial;