// 서브페이지 - 건강 지원
// npm install react-kakao-maps-sdk
import React from 'react';
import '../../assets/css/sub/sub.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';

// Link
import { Link } from 'react-router-dom';

const healthLinks = [
  {
    href: '',
    title: '01. 무료 진료소',
    desc: '진료소 주소',
  },
  {
    href: '',
    title: '02. 무료 진료소',
    desc: '진료소 주소',
  },
  {
    href: '',
    title: '03. 무료 진료소',
    desc: '진료소 주소',
  },
  {
    href: '',
    title: '04. 무료 진료소',
    desc: '진료소 주소',
  },
];

const SubHealth = () => {
  return (
    <>
      <header>
        <div className="sub-Header">
          <Link to="/Main">
            <div className="flex">
              <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
              <div className="sub-MainTitle">건강 지원</div>
            </div>
          </Link>
        </div>
      </header>
      <main>
        <div className="sub-Background">
          <div className="sub-map"></div>
          {healthLinks.map((link, index) => (
            <div className="sub-health__container" key={index}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <div className="flex__column">
                  <p className="sub-healthTitle">{link.title}</p>
                  <p className="sub-healthDesc">{link.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default SubHealth;
