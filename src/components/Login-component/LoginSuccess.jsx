import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 쿼리 파라미터로 전달된 인가 코드 가져오기
    const params = new URLSearchParams(window.location.search);
    const authorizationCode = params.get('code');

    if (authorizationCode) {
      console.log("Authorization Code:", authorizationCode);

      // POST 요청으로 인가 코드를 백엔드에 전달
      const exchangeAuthorizationCode = async () => {
        try {
          const response = await axios.post('http://3.93.236.79:8080/api/jwt', {
            code: authorizationCode,
          });

          // JWT 토큰 저장
          const jwtToken = response.data.token;
          localStorage.setItem('jwt_token', jwtToken);

          // 메인 페이지로 이동
          navigate('/Main');
        } catch (error) {
          console.error('Failed to exchange authorization code:', error);
          //navigate('/login');
        }
      };

      exchangeAuthorizationCode();
    } else {
      console.error("Authorization code not found in URL");
      //navigate('/login');
    }
  }, [navigate]);

  return <p>로딩 중입니다...</p>;
};

export default LoginSuccess;
