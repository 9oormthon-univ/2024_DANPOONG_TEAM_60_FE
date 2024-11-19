// 복지 지원 섹션 파일
import React from 'react';
import '../../styles/Main-components/MainHealth.css';
import health from '../../assets/health_icon.png';
import arrow from '../../assets/arrpw_icon.png';

const MainHealth = () => {
  return (
    <div className='welfare-container'>
      <p>본인에게 맞는 건강 지원을 찾아보세요.</p>
      <div className='btn-container'>
        <div className='icon-container'>
          <img src={health} alt='welfare' className='health-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>건강 지원</div>
          <div className='content'>지도로 한 눈에 보기</div>
        </div>
        <img src={arrow} alt='welfare' className='arrow-icon-img' />
      </div>
    </div>
  );
};

export default MainHealth;