import React from "react";
import "../../assets/css/tutorial/MainTutorial.css"
import order from "../../assets/images/tutorial/tut2.png";
import mainimg from "../../assets/images/tutorial/main_tut.png";

const MainTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">필요한 정보를 한 눈에</div>
            <div className="tutorial-content">필요한 정보를 쉽고 편리하게 찾아봐요.</div>
            <div className="tutorial-content"></div>
            <img src={mainimg} alt="mainimg" className="main-img" />
        </div>
    );
}

export default MainTutorial;