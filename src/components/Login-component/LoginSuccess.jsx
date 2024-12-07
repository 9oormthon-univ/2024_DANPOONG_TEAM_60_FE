import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 쿼리 파라미터로 전달된 액세스 토큰을 가져옴
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('access_token');

    if (accessToken) {
      // 로컬 스토리지에 액세스 토큰 저장
      localStorage.setItem('access_token', accessToken);

      // 액세스 토큰을 사용하여 카카오 사용자 정보 API 호출
      const fetchUserInfo = async () => {
        try {
          const response = await axios.get(
            'https://kapi.kakao.com/v2/user/me',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          // 사용자 정보 상태에 저장
          setUserData(response.data);
          navigate('/Main');
        } catch (error) {
          console.error('Failed to fetch user info:', error);
          // 사용자 정보를 불러올 수 없는 경우 로그인 페이지로 리다이렉트
          //navigate('/login');
        }
      };

      fetchUserInfo();
    } else {
      // 액세스 토큰이 없는 경우 로그인 페이지로 리다이렉트
      //navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      {userData ? (
        <>
          <h1>환영합니다, {userData.properties?.nickname}님!</h1>
          <p>이메일: {userData.kakao_account?.email || '이메일 없음'}</p>
        </>
      ) : (
        <p>로딩 중입니다...</p>
      )}
    </div>
  );
};

export default LoginSuccess;