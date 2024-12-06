import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/jungbo.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import DaeHan from '../../assets/images/sub/education/DaeHan.png';
import JinH from '../../assets/images/sub/education/JinH.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const jungboLinks = [
  {
    href: 'https://kws.or.kr/news/notice.asp?mode=view&idx=21685&page=1&pageSize=10&search=0&serboardsort=1&searchStr=%EC%84%B8%EC%9D%B4%ED%94%84',
    imgSrc: DaeHan,
    alt: 'IBK와 함께하는 세이프 콜, 세이프 머니',
    title: 'IBK와 함께하는 \n세이프 콜, 세이프 머니',
    explan:
      'IBK와 함께하는 세이프 콜, 세이프 머니는 IBK와 함께 전국 소상공인을 대상으로 보이스피싱 보장보험료를 지원하는 서비스다.',
    video: 'Y4qI-L0mjIE',
    className: 'jungbo-daeHan-image', // 고유 클래스
  },
  {
    href: 'https://kws.or.kr/news/notice.asp?mode=view&idx=21951&page=1&pageSize=10&search=0&serboardsort=1&searchStr=%EB%B3%B4%EC%9D%B4%EC%8A%A4%ED%94%BC%EC%8B%B1',
    imgSrc: DaeHan,
    alt: '전기통신금융사기 피해지원사업 (보이스피싱)',
    title: '전기통신금융사기 피해지원사업 \n(보이스피싱)',
    explan:
      '전기통신금융사기 피해지원사업 (보이스피싱)은 대한사회복지회에서 보이스피싱 예방교육 및 피해자 구제를 도와주는 서비스이다.',
    video: 'Y4qI-L0mjIE',
    className: 'jungbo-daeHan-image', // 고유 클래스
  },
  {
    href: 'https://www.kpf.or.kr/front/user/main.do',
    imgSrc: JinH,
    alt: '한국언론진흥재단 신문 무료구독 지원',
    title: '한국언론진흥재단 \n신문 무료구독 지원',
    explan:
      '한국언론진흥재단 신문 무료구독 지원은 한국언론진흥재단에서 정보복지 확대를 위하여 일부 지원대상을 상대로 신문 구독 지원을 해주는 사업이다.',
    video: 'lDiNySY4p4s',
    className: 'jungbo-jinH-image', // 고유 클래스
    customClass: 'jinH-button',
  },
];

const Jungbo = () => {
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
            <div className="sub-MainTitle">정보</div>
          </div>
        </Link>
      </div>
      <div className="sub-Background">
        {jungboLinks.map((link, index) => (
          <div className="sub-jungbo__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-jungbo__img ${link.className}`}
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

export default Jungbo;
