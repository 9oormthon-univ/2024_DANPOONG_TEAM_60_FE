// 서브페이지 - 긴급 지원
import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/quarter/sub-urgent.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import Kamko from '../../assets/images/sub/Kamko.png';
import Jutak from '../../assets/images/sub/Jutak.png';
import BockJiRo from '../../assets/images/sub/BockJiRo.png';
import GeongKi from '../../assets/images/sub/GeongKi.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const urgentLinks = [
  {
    href: 'https://www.mohw.go.kr/menu.es?mid=a10708010100',
    imgSrc: korean,
    alt: '긴급복지지원',
    title: '긴급복지지원',
    explan:
      '위기상황에 놓여 생계유지가 곤란한 저소득 가구에 생계 · 의료 · 주거지원 등 필요한 지원을 일시적으로 신속하게 지원하여 위기상황에서 벗어날 수 있도록 돕는 제도이다. 위기 상황의 발생으로 생계유지 등이 곤란하게 된 저소득 기구라면 누구든 긴급지원 대상이다. 본인이 저소득 가구라면 신청해보자.',
    video: 'ok_AF1usiVc',
  },
  {
    href: 'https://www.kamco.or.kr/portal/contents.do?mId=0202010000',
    imgSrc: Kamko,
    alt: '캠코 한국자산관리공사',
    title: '캠코\n한국자산관리공사',
    customtitle: 'kamko-title',
    explan:
      '부실자산의 관리 및 청산, 기업구조조정 지원 등을 목적으로 하는 국내 유일의 자산관리 전문 금융위원회 산하 기금관리형 준정부기관. 약칭 캠코라고 불린다. 말 그대로 자산관리를 도와준다.',
    video: 'TOjgfcaGz9c',
    className: 'kamko-image', // 고유 클래스
    customClass: 'kamko-button',
  },
  {
    href: 'https://www.hf.go.kr/ko/sub02/sub01_09_03_02.do',
    imgSrc: Jutak,
    alt: '한국주택금융공사',
    title: '한국주택금융공사',
    explan:
      '주택금융 등의 장기적이고 안정적인 공급을 촉진해 국민의 복지증진과 국민경제의 발전에 이바지하기 위해 설립된 금융위원회 산하 기금관리형 준정부기관. 본사 주소는 부산광역시 남구 문현금융로 40이다.',
    video: '5Gdsv48LsPg',
    className: 'jutak-image', // 고유 클래스
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003836',
    imgSrc: BockJiRo,
    alt: '복지로',
    title: '복지로',
    explan:
      '받을 수 있는 복지서비스를 맞춤형으로 찾아서 안내해 주는 제도이다. "나에게 필요한 급여와 내가 받을 수 있는 급여"를 생애주기별로 적극적으로 찾아준다. 대한민국의 맞춤형 복지서비스를 제공하는 복지포털이다.',
    video: '_Ph06yrMGH4',
  },
  {
    href: 'https://housing.gg.go.kr/html/24202.do',
    imgSrc: GeongKi,
    alt: '경기주거복지포털',
    title: '경기주거복지포털',
    explan:
      '경기도 안에서 공공임대주택, 주거비 및 금융지원, 주택개량 지원, 주택 노후 대비 등. 모든 경기도민이 쾌적한 주택환경을 경험하도록 노력하는 포털이다.',
    video: '93OHUGdh3xQ',
    className: 'geongKi-image', // 고유 클래스
  },
];

const SubUrgent = () => {
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
            <div className="sub-MainTitle">긴급 지원</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {urgentLinks.map((link, index) => (
          <div className="sub-Urgent__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-Urgent__img ${link.className}`}
                  src={link.imgSrc}
                  alt={link.alt}
                />
                <p className={`sub-Urgent__ContainTitle ${link.customtitle}`}>
                  {link.title}
                </p>
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

export default SubUrgent;
