import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginSuccess = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // 액세스 토큰을 서버로부터 받아오는 함수 정의
    const fetchAccessToken = async () => {
      try {
        // GET 요청을 보내고 응답에서 액세스 토큰을 body에서 추출
        const response = await axios.get(
          'http://44.212.10.165:8080/api/token',
          {
            withCredentials: false,
          }
        );

        // 응답 body에서 액세스 토큰 추출
        const accessToken = response.access_token;

        if (accessToken) {
          // 로컬 스토리지에 액세스 토큰 저장
          localStorage.setItem('access_token', accessToken);

          // 액세스 토큰 디코딩
          const decodedToken = jwtDecode(accessToken);

          // 디코딩된 토큰에서 사용자 정보 추출
          const userInfo = {
            id: decodedToken.sub,
            name: decodedToken.name || '이름 없음', // name 필드가 없을 수 있으므로 기본값 설정
            email: decodedToken.email || '이메일 없음', // email 필드가 없을 수 있으므로 기본값 설정
          };

          setUserData(userInfo);
        } else {
          // 액세스 토큰이 없으면 로그인 페이지로 이동
          //window.location.href = '/login';
          console.log('no token');
        }
      } catch (error) {
        console.error('Failed to fetch access token:', error);
        //window.location.href = '/login';
        console.log('err');
      }
    };

    // 액세스 토큰을 받아오는 함수 호출
    fetchAccessToken();
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h1>환영합니다, {userData.name}님!</h1>
          <p>이메일: {userData.email}</p>
        </>
      ) : (
        <p>로딩 중입니다...</p>
      )}
    </div>
  );
};

export default LoginSuccess;
