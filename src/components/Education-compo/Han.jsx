import React from 'react';
import '../../assets/css/sub/sub.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import DaeHan from '../../assets/images/sub/education/DaeHan.png';
import HanBumo from '../../assets/images/sub/education/HanBumo.png';
import Miral from '../../assets/images/sub/education/Miral.png';
import Gurye from '../../assets/images/sub/education/Gurye.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const hanLinks = [
  {
    href: 'https://kws.or.kr/news/notice.asp',
    imgSrc: DaeHan,
    alt: '한부모가정 취업촉진 지원사업',
    title: '한부모가정 취업촉진 지원사업',
  },
  {
    href: 'https://kaswc.or.kr/welfarenews/341879',
    imgSrc: HanBumo,
    alt: '한부모 자립역량강화 지원사업 단단한부모-똑똑한 엄마',
    title: '한부모 자립역량강화 지원사업 \n"단단한부모-똑똑한 엄마"',
  },
  {
    href: 'https://www.miral.org/main/main.asp',
    imgSrc: Miral,
    alt: '"우리가족, 함께 기대"',
    title: '"우리가족, 함께 기대"',
  },
  {
    href: 'https://www.gurye.go.kr/kr/main.do',
    imgSrc: Gurye,
    alt: '구례군 유치원 및 어린이집 방과후 특별활동비 지원사업',
    title: '구례군 유치원 및 어린이집 \n방과후 특별활동비 지원사업',
  },
];

const Han = () => {
  return (
    <>
      <header>
        <div className="sub-Header">
          <Link to="/SubEducation">
            <div className="flex">
              <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
              <div className="sub-MainTitle">한부모 가정/저출생</div>
            </div>
          </Link>
        </div>
      </header>
      <main>
        <div className="sub-Background">
          {hanLinks.map((link, index) => (
            <div className="sub-Education__container" key={index}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <div className="flex">
                  <img className="sub-img" src={link.imgSrc} alt={link.alt} />
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

export default Han;
