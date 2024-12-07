// 복지 지원 섹션 파일
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/main/MainEducation.css';
import edu from '../../assets/images/main/edu_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';



const MainEducation = () => {
  return (
    <div className='welfare-container'>
      <p>필요한 교육을 찾아보세요.</p>
      <Link className='btn-container' to='/SubEducation'>
        <div className='icon-container'>
          <img src={edu} alt='edu' className='edu-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>교육 지원</div>
          <div className='content'>필요한 교육 알림받기</div>
        </div>
        <img src={arrow} alt='arrow' className='arrow-icon-img' />
      </Link>
    </div>
  );
};

export default MainEducation;