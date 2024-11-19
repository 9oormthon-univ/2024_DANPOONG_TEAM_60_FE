// 복지 지원 섹션 파일
import React from 'react';
import '../../styles/Main-components/MainEducation.css';
import edu from '../../assets/edu_icon.png';
import arrow from '../../assets/arrpw_icon.png';

const MainEducation = () => {
  return (
    <div className='welfare-container'>
      <p>본인에게 필요한 교육을 찾아보세요.</p>
      <div className='btn-container'>
        <div className='icon-container'>
          <img src={edu} alt='welfare' className='edu-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>교육 지원</div>
          <div className='content'>필요한 교육 알림받기</div>
        </div>
        <img src={arrow} alt='welfare' className='arrow-icon-img' />
      </div>
    </div>
  );
};

export default MainEducation;