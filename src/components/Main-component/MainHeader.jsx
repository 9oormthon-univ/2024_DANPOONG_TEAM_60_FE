import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위해 useNavigate 사용
import "../../assets/css/main/MainHeader.css";

const MainHeader = () => {
  const [userName, setUserName] = useState(''); // 사용자 이름 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // 로컬 스토리지에서 액세스 토큰 가져오기
        const accessToken = localStorage.getItem('access_token');
        
        if (!accessToken) {
          throw new Error('No access token found');
        }

        // 카카오 사용자 정보 요청
        const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // 사용자의 이름 가져오기
        const name = response.data.properties?.nickname || '이름 없음';
        setUserName(name);
      } catch (error) {
        console.error('사용자 정보를 가져오는데 실패했습니다.', error);
      }
    };

    fetchUserName();
  }, []);

  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('access_token');
    // 로그인 페이지로 이동
    navigate('/login');
  };

  return (
    <div className="back-container">
      <div className="header-container">
        <div className="header-left" style={{ whiteSpace: 'nowrap' }}>
          함께가치
        </div>
        <div className="header-right">
          <button className='logout-btn' onClick={handleLogout}>로그아웃</button>
        </div>
      </div>
      <div className="content-container">
        <p className="greeting-text">{userName}님, 안녕하세요.</p>
        <p className="greeting-text">함께 찾는 ‘함께가치’입니다.</p>
      </div>
    </div>
  );
};

export default MainHeader;
