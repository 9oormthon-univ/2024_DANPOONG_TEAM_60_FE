// 복지 지원 섹션 파일
import React from 'react';
import '../../assets/css/main/MainWelfare.css';
import urgent from '../../assets/images/main/urgent_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';

const MainUrgent = () => {
  return (
    <div className='welfare-container'>
      <p>긴급 대출 정보나 지역 사회 긴급 지원 센터 위치를 찾아보세요.</p>
      <div className='btn-container'>
        <div className='icon-container'>
          <img src={urgent} alt='welfare' className='urgent-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>긴급 지원</div>
          <div className='content'>알림을 통해 위기 상황에 대한 대처 방법을 알림으로 전달합니다.</div>
        </div>
        <img src={arrow} alt='welfare' className='arrow-icon-img' />
      </div>
    </div>
  );
};

export default MainUrgent;