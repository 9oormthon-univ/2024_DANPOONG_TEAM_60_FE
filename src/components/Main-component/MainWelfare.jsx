// 복지 지원 섹션 파일
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/main/MainWelfare.css';
import welfare from '../../assets/images/main/welfare_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';

const MainWelfare = () => {
  return (
    <div className='welfare-container'>
      <p>맞춤형 복지 서비스와 혜택을 확인해보세요.</p>
      <Link className='btn-container' to='/SubWelfare'>
        <div className='icon-container'>
          <img src={welfare} alt='welfare' className='welfare-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>복지 지원</div>
          <div className='content'>본인의 연령, 가족 구성, 소득 수준에 맞는</div>
          <div className='content'>정부 및 민간 지원 혜택을 추천합니다.</div>
        </div>
        <img src={arrow} alt='arrow' className='arrow-icon-img' />
      </Link>
    </div>
  );
};

export default MainWelfare;
