// 복지 지원 섹션 파일
import React from 'react';
import '../../assets/css/main/MainWelfare.css';
import live from '../../assets/images/main/live_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';

const MainLive = () => {
  return (
    <div className='welfare-container'>
      <p>본인에게 맞는 생활비 절감 지원을 찾아보세요.</p>
      <div className='btn-container'>
        <div className='icon-container'>
          <img src={live} alt='live' className='live-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>생활비 절감 지원</div>
          <div className='content'>각종 대출 정보와 긴급 지원 센터 알아보기</div>
        </div>
        <img src={arrow} alt='welfare' className='arrow-icon-img' />
      </div>
    </div>
  );
};

export default MainLive;