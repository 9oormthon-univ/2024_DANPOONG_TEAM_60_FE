import React from 'react';
import '../styles/LoginView.css';
import Ham from '../assets/Ham.png';
import gge from '../assets/gge.png';
import ga from '../assets/ga.png';
import chi from '../assets/chi.png';
import loginBtn from '../assets/kakao_login_small.png';

const LoginView = () => {
  return (
    <div className="login-container">
      <div className="text-section">
        <p className="subtext">도움이 필요한 당신을 위한 공간,</p>
        <div className="main-text">
          <img src={Ham} alt="함" className="main-text-image" />
          <img src={gge} alt="께" className="main-text-image" />
          <img src={ga} alt="가" className="main-text-image" />
          <img src={chi} alt="치" className="main-text-image" />
        </div>
      </div>
      
      <button className="login-button">
        <img src={loginBtn} alt="카카오 로그인" className='btnImg'/>
      </button>
      
    </div>
  );
};

export default LoginView;
