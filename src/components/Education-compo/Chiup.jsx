import React from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/chiup.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import JanHak from '../../assets/images/sub/JanHak.png';
import Gujik from '../../assets/images/sub/education/Gujik.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const chiupLinks = [
  {
    href: 'https://job.mpva.go.kr/main.do#MAIN',
    imgSrc: korean,
    alt: '국가보훈대상자 취업능력개발지원',
    title: '국가보훈대상자 취업능력개발지원',
    className: 'chiup-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.kosaf.go.kr/ko/tuition.do?pg=tuition05_01_01',
    imgSrc: JanHak,
    alt: '취업 후 상환 학자금대출',
    title: '취업 후 상환 학자금대출',
    className: 'chiup-janhak-image', // 고유 클래스
  },
  {
    href: 'https://www.gyeongnam.go.kr/mydata/',
    imgSrc: Gujik,
    alt: '청년구직활동수당 지원사업',
    title: '청년구직활동수당 지원사업',
    className: 'chiup-gujik-image', // 고유 클래스
  },
];

const Chiup = () => {
  return (
    <div className="sub-view-container">
      <div className="sub-Header">
        <Link to="/SubEducation">
          <div className="flex">
            <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
            <div className="sub-MainTitle">취업</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {chiupLinks.map((link, index) => (
          <div className="sub-chiup__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-chiup__img ${link.className}`}
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

export default Chiup;
