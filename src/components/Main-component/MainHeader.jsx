import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../assets/css/main/MainHeader.css";

const MainHeader = () => {
  const [userName, setUserName] = useState(''); // 사용자 이름 상태 추가

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get('http://54.147.198.122:8080/api/me', {
          withCredentials: true, // 쿠키와 함께 요청 보내기 (세션 인증 사용)
        });
        
        // 사용자의 이름 가져오기
        const name = response.data.name; // 카카오에서 가져온 사용자 이름 (필드명은 실제 API에 맞게 수정 필요)
        setUserName(name);
      } catch (error) {
        console.error('사용자 정보를 가져오는데 실패했습니다.', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="back-container">
      <div className="header-container">
        <div className="header-left">
          함께가치
        </div>
        <div className="header-right">
          <button className='logout-btn'>로그아웃</button>
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
