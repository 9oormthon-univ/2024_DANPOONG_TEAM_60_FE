// 복지 지원 섹션 파일
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/main/MainHealth.css';
import health from '../../assets/images/main/health_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';

const MainHealth = () => {
  return (
    <div className='welfare-container'>
      <p>필요한 건강 지원을 찾아보세요.</p>
      <Link className='btn-container' to='/SubHealth'>
        <div className='icon-container'>
          <img src={health} alt='health' className='health-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>건강 지원</div>
          <div className='content'>지도로 한 눈에 보기</div>
        </div>
        <img src={arrow} alt='arrow' className='arrow-icon-img' />
      </Link>
    </div>
  );
};

export default MainHealth;