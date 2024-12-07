import React from "react";
import "../../assets/css/tutorial/MainTutorial.css"
import order from "../../assets/images/tutorial/tut6.png";
import mainimg from "../../assets/images/tutorial/chat_tut.png";

const ChatTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">많은 사람들과 정보공유</div>
            <div className="tutorial-content">오픈채팅을 이용해서 사람들과 소통하고 정보를 공유해요.</div>
            <img src={mainimg} alt="mainimg" classN ame="main-img" />
        </div>
    );
}

export default ChatTutorial;