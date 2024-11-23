import React from 'react';
import '../assets/css/login/LoginView.css';
import loginBtn from '../assets/images/login/kakao_login_medium_narrow 1.png';

const LoginView = () => {

  const handleLogin = () => {
    window.location.href = 'http://3.93.236.79:8080/oauth2/authorization/kakao';
  };

  return (
    <div className="login-container">
      <div className="text-section">
        <p className="subtext">도움이 필요한 당신을 위한 공간,</p>
        <div className="main-text">
          함께가치
        </div>
      </div>
      
      <button className="login-button" onClick={handleLogin}>
        <img src={loginBtn} alt="카카오 로그인" className='btnImg'/>
      </button>
    </div>
  );
};

export default LoginView;
