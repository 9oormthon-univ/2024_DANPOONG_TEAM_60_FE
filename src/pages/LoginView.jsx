import React from 'react';
import '../assets/css/login/LoginView.css';
import Ham from '../assets/images/login/Ham.png';
import gge from '../assets/images/login/gge.png';
import ga from '../assets/images/login/ga.png';
import chi from '../assets/images/login/chi.png';
import loginBtn from '../assets/images/login/kakao_login_small.png';

const LoginView = () => {
  const Rest_api_key = process.env.REACT_APP_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
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
