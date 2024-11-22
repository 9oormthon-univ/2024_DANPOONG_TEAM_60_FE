// 서브페이지 - 복지 지원
import React from 'react';
import '../../assets/css/sub/sub.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import BockJiRo from '../../assets/images/sub/BockJiRo.png';
import JanHak from '../../assets/images/sub/JanHak.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const welfareLinks = [
  {
    href: 'https://www.mohw.go.kr',
    imgSrc: korean,
    alt: '보건복지부',
    title: '보건복지부',
  },
  {
    href: 'https://www.molit.go.kr/portal.do#mltm',
    imgSrc: korean,
    alt: '국토교통부',
    title: '국토교통부',
  },
  {
    href: 'https://www.gov.kr/portal/main/nologin',
    imgSrc: korean,
    alt: '보조금 24',
    title: '보조금 24',
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/index.do',
    imgSrc: BockJiRo,
    alt: '복지로',
    title: '복지로',
  },
  {
    href: 'https://www.kosaf.go.kr/ko/main.do',
    imgSrc: JanHak,
    alt: '한국장학재단',
    title: '한국장학재단',
  },
  {
    href: 'https://www.mois.go.kr/frt/a01/frtMain.do',
    imgSrc: korean,
    alt: '행정안전부',
    title: '행정안전부',
  },
];

const SubWelfare = () => {
  return (
    <>
      <header>
        <div className="sub-Header">
          <Link to="/Main">
            <div className="flex">
              <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
              <div className="sub-MainTitle">복지 지원</div>
            </div>
          </Link>
        </div>
      </header>
      <main>
        <div className="sub-Background">
          {welfareLinks.map((link, index) => (
            <div className="sub-Welfare__container" key={index}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <div className="flex">
                  <img className="sub-img" src={link.imgSrc} alt={link.alt} />
                  <p className="sub-ContainTitle">{link.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default SubWelfare;
