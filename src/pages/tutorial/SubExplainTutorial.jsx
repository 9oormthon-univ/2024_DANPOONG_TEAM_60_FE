import React from "react";
import "../../assets/css/tutorial/MainTutorial.css"
import order from "../../assets/images/tutorial/tut4.png";
import mainimg from "../../assets/images/tutorial/subexplain_tut.png";

const SubExplainTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">궁금한 정보를 한 눈에</div>
            <div className="tutorial-content">짧은 글과 유튜브로 잘 몰랐던 정보를 알아봐요.</div>
            <img src={mainimg} alt="mainimg" className="main-img" />
        </div>
    );
}

export default SubExplainTutorial;