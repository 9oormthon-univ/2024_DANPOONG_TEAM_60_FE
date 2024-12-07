import React from 'react';
import '../assets/css/login/LoginView.css';
import loginBtn from '../assets/images/login/kakao_login_medium_narrow 1.png';

const LoginView = () => {
  const handleLogin = () => {
    // 카카오 로그인 페이지로 리다이렉션
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=aa0956755ddd2e3e195dd6e44abd6502&redirect_uri=http://localhost:3000/loginsuccess&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="login-container">
      <button className="login-button" onClick={handleLogin}>
        <img src={loginBtn} alt="카카오 로그인" />
      </button>
    </div>
  );
};

export default LoginView;
