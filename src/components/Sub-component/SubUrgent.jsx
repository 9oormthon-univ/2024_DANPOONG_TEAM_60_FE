// 서브페이지 - 긴급 지원
import React from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/quarter/sub-urgent.css';

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
  },
  {
    href: 'https://www.kamco.or.kr/portal/contents.do?mId=0202010000',
    imgSrc: Kamko,
    alt: '캠코 한국자산관리공사',
    title: '캠코 한국자산관리공사',
  },
  {
    href: 'https://www.hf.go.kr/ko/sub02/sub01_09_03_02.do',
    imgSrc: Jutak,
    alt: '한국주택금융공사',
    title: '한국주택금융공사',
    className: 'jutak-image', // 고유 클래스
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003836',
    imgSrc: BockJiRo,
    alt: '복지로',
    title: '복지로',
  },
  {
    href: 'https://housing.gg.go.kr/html/24202.do',
    imgSrc: GeongKi,
    alt: '경기주거복지포털',
    title: '경기주거복지포털',
    className: 'geongKi-image', // 고유 클래스
  },
];

const SubUrgent = () => {
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
                <p className="sub-Urgent__ContainTitle">{link.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubUrgent;
