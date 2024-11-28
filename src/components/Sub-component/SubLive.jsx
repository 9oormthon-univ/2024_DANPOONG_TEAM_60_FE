// 서브페이지 - 생활비 절감 지원
import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/quarter/sub-live.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

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
    className: 'wifi-image', // 고유 클래스
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.purplemint.fileFreeFoodService',
    imgSrc: GeupSik,
    alt: '무료 급식소',
    title: '무료 급식소',
    className: 'geupsik-image', // 고유 클래스
  },
  {
    href: 'https://wis.seoul.go.kr/was/don/donatedFoodInfo.do',
    imgSrc: Seoul,
    alt: '서울복지포털',
    title: '서울복지포털',
    className: 'seoul-image', // 고유 클래스
  },
  {
    href: 'https://www.beautifulstore.org/findstore',
    imgSrc: Gake,
    alt: '아름다운 가게',
    title: '아름다운 가게',
    className: 'gake-image', // 고유 클래스
  },
  {
    href: 'https://www.nanumistore.org/location',
    imgSrc: Nanume,
    alt: '구세군희망나누미',
    title: '구세군희망나누미',
    className: 'nanume-image', // 고유 클래스
  },
];

const SubLive = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // 닫기
    } else {
      setOpenIndex(index); // 열기
    }
  };

  return (
    <div className="sub-view-container">
      <div className="sub-Header">
        <Link to="/Main">
          <div className="flex">
            <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
            <div className="sub-MainTitle">생활비 절감 지원</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {liveLinks.map((link, index) => (
          <div className="sub-Live__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-Live__img ${link.className}`}
                  src={link.imgSrc}
                  alt={link.alt}
                />
                <p className="sub-Live__ContainTitle">{link.title}</p>
              </div>
            </a>
            <button
              className="dropdown-button"
              onClick={() => {
                toggleDropdown(index);
              }}
            >
              {openIndex === index ? '닫기' : '더보기'}
            </button>
            {openIndex === index && (
              <div className="dropdown-content">
                {link.explan}
                <YouTube
                  className="youtube"
                  videoId={link.video}
                  opts={{
                    width: '334px',
                    height: '316px',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubLive;
