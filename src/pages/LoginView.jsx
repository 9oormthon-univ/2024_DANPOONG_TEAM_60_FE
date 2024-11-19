import React from 'react';
import '../assets/css/login/LoginView.css';
import Ham from '../assets/images/login/Ham.png';
import gge from '../assets/images/login/gge.png';
import ga from '../assets/images/login/ga.png';
import chi from '../assets/images/login/chi.png';
import loginBtn from '../assets/images/login/kakao_login_small.png';

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
