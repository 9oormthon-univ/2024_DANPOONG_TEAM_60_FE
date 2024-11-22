import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 성공 후 사용자 정보 요청
    const getUserInfo = async () => {
      try {
        const response = await axios.get('http://54.147.198.122:8080/api/me', {
          withCredentials: true, // 세션 쿠키 포함
        });

        if (response.status === 200) {
          // 사용자 정보가 확인되면 메인 페이지로 이동
          navigate('/Main');
        }
      } catch (error) {
        console.error("사용자 정보를 가져오는데 실패했습니다.", error);
        // 로그인 실패 시 다시 로그인 페이지로 이동
        navigate('/Login');
      }
    };

    getUserInfo();
  }, [navigate]);

  return <div>로그인 중...</div>;
};

export default LoginSuccess;
