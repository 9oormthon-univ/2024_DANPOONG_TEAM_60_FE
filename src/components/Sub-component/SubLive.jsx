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
    explan:
      '공공와이파이는 언제 어디서나 누구나 쉽게 무료로 와이파이를 제공하도록 도와주는 무선인터넷 서비스이다.',
    video: 'ttFnYnTnfrA',
    className: 'wifi-image', // 고유 클래스
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.purplemint.fileFreeFoodService',
    imgSrc: GeupSik,
    alt: '무료 급식소',
    title: '무료 급식소',
    explan:
      '내 위치를 기준으로, 무료 급식소의 위치를 거리순으로 확인할 수 있는 앱이다. 목적에 맞게 원하는 정보도 조회되며 무료 급식소의 블로그 정보도 확인 가능하다.',
    video: 'UQE9g8J7l4g',
    className: 'geupsik-image', // 고유 클래스
  },
  {
    href: 'https://wis.seoul.go.kr/was/don/donatedFoodInfo.do',
    imgSrc: Seoul,
    alt: '서울복지포털',
    title: '서울복지포털',
    explan:
      '서울복지포털은 생활유지 능력이 없거나 생활이 어려운 저소득 국민의 의료문제(질병, 부상, 출산 등)를 국가가 보장하는 공공부조 제도로 건강보험과 함께 국민 의료보장의 중요한 수단을 제공한다. 어르신,장애인,노숙자 분들도 복지를 지원해준다.',
    video: 'hG9WJccfUdY',
    className: 'seoul-image', // 고유 클래스
  },
  {
    href: 'https://www.beautifulstore.org/findstore',
    imgSrc: Gake,
    alt: '아름다운 가게',
    title: '아름다운 가게',
    explan:
      '비영리 공익법인이자 대한민국 사회적기업 2호이다. 기증품 판매 수익금, 개인/단체 기부금, 행사 수익금 등을 통하여 지역공동체 회복 및 빈곤 해결과 환경문제를 해소하는 것을 목표로 한다. 아름다운 가게는 자체 수익으로 활동하고 있다. 또한 각종 캠페인도 진행하고 있으니, 지원을 받아보는 것을 추천한다.',
    video: 'WfozJQcZOTs',
    className: 'gake-image', // 고유 클래스
  },
  {
    href: 'https://www.nanumistore.org/location',
    imgSrc: Nanume,
    alt: '구세군희망나누미',
    title: '구세군희망나누미',
    explan:
      '구세군 희망나누미는 기업이나 개인이 기증한 의류와 생활용품 등을 재생산하여 판매하는 재활용품 순환의 가게이다. 구세군에 기증/후원금은 독거노인,소녀/소년 가장,장애우 가정, 어려운 이웃을 돕는데 쓰여진다.',
    video: 'VxrAI9_AMxI',
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
