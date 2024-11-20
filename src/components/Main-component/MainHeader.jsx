// header 파일
import React from 'react';
import "../../assets/css/main/MainHeader.css"
import Ham from "../../assets/images/main/Ham(white).png"
import gge from "../../assets/images/main/gge(white).png"
import ga from "../../assets/images/main/ga(white).png"
import chi from "../../assets/images/main/chi(white).png"

const MainHeader = () => {
  return (
    <div className="back-container">
      <div className="header-container">
      <div className="header-left">
        <img src={Ham} alt="함" className="text-image" />
        <img src={gge} alt="께" className="text-image" />
        <img src={ga} alt="가" className="text-image" />
        <img src={chi} alt="치" className="text-image" />
      </div>
      <div className="header-right">
        <button className='logout-btn'>로그아웃</button>
      </div>
      </div>
      <div className="content-container">
        <p className="greeting-text">000님, 안녕하세요.</p>
        <p className="description-text">함께 찾는 ‘함께가치’입니다.</p>
      </div>
    </div>
  );
};

export default MainHeader;
