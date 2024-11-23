// 서브페이지 - 교육 지원
import React from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/quarter/sub-education.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import Chiup from '../../assets/images/sub/education/Chiup.png';
import School from '../../assets/images/sub/education/School.png';
import Han from '../../assets/images/sub/education/Han.png';
import Jangae from '../../assets/images/sub/education/Jangae.png';
import Jungbo from '../../assets/images/sub/education/Jungbo.png';
import Out from '../../assets/images/sub/education/Out.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const educationLinks = [
  {
    path: '/Chiup',
    imgSrc: Chiup,
    title: '취업',
    alt: '취업',
  },
  {
    path: '/School',
    imgSrc: School,
    title: '학교',
    alt: '학교',
    className: 'school-image', // 고유 클래스
  },
  {
    path: '/Han',
    imgSrc: Han,
    title: '한부모가정/저출생',
    alt: '한부모가정/저출생',
    className: 'han-image', // 고유 클래스
  },
  {
    path: '/Jangae',
    imgSrc: Jangae,
    title: '장애',
    alt: '장애',
  },
  {
    path: '/Jungbo',
    imgSrc: Jungbo,
    title: '정보',
    alt: '정보',
    className: 'jungbo-image', // 고유 클래스
  },
  {
    path: '/Out',
    imgSrc: Out,
    title: '기타',
    alt: '기타',
  },
];

const SubEducation = () => {
  return (
    <div className="sub-view-container">
      <div className="sub-Header">
        <Link to="/Main">
          <div className="flex">
            <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
            <div className="sub-MainTitle">교육 지원</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {educationLinks.map((link, index) => (
          <div className="sub-Education__container" key={index}>
            <Link to={link.path}>
              <div className="flex">
                <img
                  className={`sub-Education__img ${link.className}`}
                  src={link.imgSrc}
                  alt={link.alt}
                />
                <p className="sub-Education__ContainTitle">{link.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubEducation;
