import React from 'react';
import chat from '../../assets/images/nav/chat_img.png';
import arrowLeft from '../../assets/images/nav/arrow_left(black).png';
import '../../assets/css/nav/Chat.css';

const Alarm = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src={arrowLeft} alt="arrowLeft" className="chat-arrow-left" />
        <p className="chat-header-text">돌아가기</p>
      </div>

      <img src={chat} alt="chat" className="chat-image" />
      <button className="chat-btn">
        <a
          href="https://open.kakao.com/o/gMfVbH1g"
          target="_blank"
          rel="noreferrer"
        >
          오픈채팅 시작하기{' '}
        </a>
      </button>
    </div>
  );
};

export default Alarm;
