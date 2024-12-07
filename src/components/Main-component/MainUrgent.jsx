// 복지 지원 섹션 파일
import React from 'react';
import '../../assets/css/main/MainWelfare.css';
import { Link } from 'react-router-dom';
import urgent from '../../assets/images/main/urgent_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';

const MainUrgent = () => {
  return (
    <div className='welfare-container'>
      <p>긴급 대출 정보나 긴급 지원 센터 위치를 찾아보세요.</p>
      <Link className='btn-container' to='/SubUrgent'>
        <div className='icon-container'>
          <img src={urgent} alt='urgent' className='urgent-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>긴급 지원</div>
          <div className='content'>알림을 통해 위기 상황에 대한</div>
          <div className='content'>대처 방법을 알림으로 전달합니다.</div>
        </div>
        <img src={arrow} alt='arrow' className='arrow-icon-img' />
      </Link>
    </div>
  );
};

export default MainUrgent;