import React from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/jangae.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import Miral from '../../assets/images/sub/education/Miral.png';
import AEUD from '../../assets/images/sub/education/AEUD.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const jangaeLinks = [
  {
    href: 'https://www.mohw.go.kr/menu.es?mid=a10710040200',
    imgSrc: korean,
    alt: '발달재활서비스',
    title: '발달재활서비스',
    className: 'jangae-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.miral.org/business/domestic_01.asp',
    imgSrc: Miral,
    alt: '장애아동가정 위기극복 지원사업 "스마일 어게인"',
    title: '장애아동가정 위기극복 지원사업 \n"스마일 어게인"',
    className: 'jangae-miral-image', // 고유 클래스
  },
  {
    href: 'https://audsc.org/seoul_cart',
    imgSrc: AEUD,
    alt: '2024 서울문자통역 서비스',
    title: '2024 서울문자통역 서비스',
    className: 'jangae-AEUD-image', // 고유 클래스
  },
];

const Jangae = () => {
  return (
    <div className="sub-view-container">
      <div className="sub-Header">
        <Link to="/SubEducation">
          <div className="flex">
            <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
            <div className="sub-MainTitle">장애</div>
          </div>
        </Link>
      </div>
      <div className="sub-Background">
        {jangaeLinks.map((link, index) => (
          <div className="sub-jangae__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-jangae__img ${link.className}`}
                  src={link.imgSrc}
                  alt={link.alt}
                />
                <p className="sub-educationTitle">{link.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jangae;