import React from "react";
import "../../assets/css/tutorial/MainTutorial.css"
import order from "../../assets/images/tutorial/tut8.png";
import mainimg from "../../assets/images/tutorial/main_tut.png";

const BoardTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">게시판을 이용해 의견을 제시</div>
            <div className="tutorial-content">게시판을 이용해 서로의 생각을 공유해요.</div>
            <img src={mainimg} alt="mainimg" className="main-img" />
        </div>
    );
}

export default BoardTutorial;