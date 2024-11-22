// 서브페이지 - 생활비 절감 지원
import React from 'react';
import '../../assets/css/sub/sub.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import WIFI from '../../assets/images/sub/WIFI.png';
import GeupSik from '../../assets/images/sub/GeupSik.png';
import Seoul from '../../assets/images/sub/Seoul.png';
import Gake from '../../assets/images/sub/Gake.png';
import Nanume from '../../assets/images/sub/Nanume.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const liveLinks = [
  {
    href: 'https://www.wififree.kr/index.do',
    imgSrc: WIFI,
    alt: '무료 와이파이',
    title: '무료 와이파이',
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.purplemint.fileFreeFoodService',
    imgSrc: GeupSik,
    alt: '무료 급식소',
    title: '무료 급식소',
  },
  {
    href: 'https://wis.seoul.go.kr/was/don/donatedFoodInfo.do',
    imgSrc: Seoul,
    alt: '서울복지포털',
    title: '서울복지포털',
  },
  {
    href: 'https://www.beautifulstore.org/findstore',
    imgSrc: Gake,
    alt: '아름다운 가게',
    title: '아름다운 가게',
  },
  {
    href: 'https://www.nanumistore.org/location',
    imgSrc: Nanume,
    alt: '구세군희망나누미',
    title: '구세군희망나누미',
  },
];

const SubLive = () => {
  return (
    <>
      <header>
        <div className="sub-Header">
          <Link to="/Main">
            <div className="flex">
              <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
              <div className="sub-MainTitle">생활비 절감 지원</div>
            </div>
          </Link>
        </div>
      </header>
      <main>
        <div className="sub-Background">
          {liveLinks.map((link, index) => (
            <div className="sub-Live__container" key={index}>
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

export default SubLive;
