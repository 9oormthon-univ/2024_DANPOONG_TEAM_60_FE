import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/jangae.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

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
    explan:
      '발달재활서비스는 성장기의 정신적•감각적 장애아동의 기능 향상과 행동 발달을 위한 적절한 발달재활 서비스 지원 및 정보를 제공해준다.',
    video: 'niqp7AoJt2U',
    className: 'jangae-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.miral.org/business/domestic_01.asp',
    imgSrc: Miral,
    alt: '장애아동가정 위기극복 지원사업 "스마일 어게인"',
    title: '장애아동가정 위기극복 지원사업 \n"스마일 어게인"',
    explan:
      '스마일 어게인은 장애아동가정의 수술비 등, 생계와 경제적 지원을 해주는 사업이다. 밀알복지재단에서 진행하고 있다.',
    video: '9hDWIg6jkoI',
    className: 'jangae-miral-image', // 고유 클래스
    customClass: 'miral-button',
  },
  {
    href: 'https://audsc.org/seoul_cart',
    imgSrc: AEUD,
    alt: '2024 서울문자통역 서비스',
    title: '2024 서울문자통역 서비스',
    explan:
      '2024 서울문자통역 서비스는 서울문자통역 서비스로, 에이유디의 조합원 문자통역 서비스를 서울시의 공공 서비스로 전환한 사례이다. 서울 시민 농난청인을 대상으로 무료로 문자 통역을 지원해준다.',
    video: 'HkCTVEm3sQs',
    className: 'jangae-AEUD-image', // 고유 클래스
    customClass: 'aeud-button',
  },
];

const Jangae = () => {
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
            <button
              className={`dropdown-button-small ${link.customClass}`}
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

export default Jangae;