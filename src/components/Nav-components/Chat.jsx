import React from "react";
import chat from "../../assets/images/nav/chat_img.png";
import "../../assets/css/nav/Chat.css"

const Alarm = () => {
    return(
        <div className="chat-container">
            <div className="chat-header">
                <p className="chat-header-text">
                    돌아가기
                </p>
            </div>
            <img src={chat} alt="chat" className="chat-image"/>
            <button className="chat-btn">
                오픈채팅 시작하기
            </button>
        </div>
    )
}

export default Alarm;