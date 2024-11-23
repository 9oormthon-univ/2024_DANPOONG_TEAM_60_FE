import React from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/jungbo.css';

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
    className: 'jungbo-daeHan-image', // 고유 클래스
  },
  {
    href: 'https://kws.or.kr/news/notice.asp?mode=view&idx=21951&page=1&pageSize=10&search=0&serboardsort=1&searchStr=%EB%B3%B4%EC%9D%B4%EC%8A%A4%ED%94%BC%EC%8B%B1',
    imgSrc: DaeHan,
    alt: '전기통신금융사기 피해지원사업 (보이스피싱)',
    title: '전기통신금융사기 피해지원사업 \n(보이스피싱)',
    className: 'jungbo-daeHan-image', // 고유 클래스
  },
  {
    href: 'https://www.kpf.or.kr/front/user/main.do',
    imgSrc: JinH,
    alt: '한국언론진흥재단 신문 무료구독 지원',
    title: '한국언론진흥재단 \n신문 무료구독 지원',
    className: 'jungbo-jinH-image', // 고유 클래스
  },
];

const Jungbo = () => {
  return (
    <>
      <header>
        <div className="sub-Header">
          <Link to="/SubEducation">
            <div className="flex">
              <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
              <div className="sub-MainTitle">정보</div>
            </div>
          </Link>
        </div>
      </header>
      <main>
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
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Jungbo;
