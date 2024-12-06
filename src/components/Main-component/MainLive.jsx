// 복지 지원 섹션 파일
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/main/MainWelfare.css';
import live from '../../assets/images/main/live_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';

const MainLive = () => {
  return (
    <div className='welfare-container'>
      <p>생활비 절감 지원을 찾아보세요.</p>
      <Link className='btn-container' to='/SubLive'>
        <div className='icon-container'>
          <img src={live} alt='live' className='live-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>생활비 절감 지원</div>
          <div className='content'>각종 대출 정보와 긴급 지원 센터 알아보기</div>
        </div>
        <img src={arrow} alt='arrow' className='arrow-icon-img' />
      </Link>
    </div>
  );
};

export default MainLive;