import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/han.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

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
    explan:
      '한부모가정 취업촉진 지원사업은 대한사회복지회에서 진행하는 사업으로, 한부모가정에서 취업을 하고자 하는 취업 준비생들을 위한 취업촉진을 도와준다.',
    video: 'lncJDnIS93U',
    className: 'school-daeHan-image', // 고유 클래스
  },
  {
    href: 'https://kaswc.or.kr/welfarenews/341879',
    imgSrc: HanBumo,
    alt: '한부모 자립역량강화 지원사업 단단한부모-똑똑한 엄마',
    title: `한부모 자립역량강화 지원사업 \n'단단한부모-똑똑한 엄마'`,
    explan:
      '한부모 자립역량강화 지원사업 단단한부모-똑똑한 엄마는 18세 이하의 아동을 양육하고 있고, 기준중위소득 150% 이하인 자, 미혼 부모 등 여러 조건에 들어가 있다면, 교육 및 훈련비를 지원해준다.',
    video: 'fcrBx0OYF0Y',
    className: 'school-hanBumo-image', // 고유 클래스
    customClass: 'hanbumo-button',
  },
  {
    href: 'https://www.miral.org/main/main.asp',
    imgSrc: Miral,
    alt: '"우리가족, 함께 기대"',
    title: `'우리가족, 함께 기대'`,
    explan:
      '우리가족, 함께 기대는 밀알복지재단에서 지원해주는 임신및 출산 가정 대상에 맞는 맞춤형 서비스를 제공해준다. 한부모가정,미혼모가정,다문화가정 등 사회취약계층을 우대해준다.',
    video: 'mMeyTGKYVBo',
    className: 'school-miral-image', // 고유 클래스
    customClass: 'school-miral-button',
  },
  {
    href: 'https://www.gurye.go.kr/kr/main.do',
    imgSrc: Gurye,
    alt: '구례군 유치원 및 어린이집 방과후 특별활동비 지원사업',
    title: '구례군 유치원 및 어린이집 \n방과후 특별활동비 지원사업',
    explan:
      '구례군 유치원 및 어린이집 방과후 특별활동비 지원사업은 구례청에서 방과후의 특별활동에 투여되는 비용을 대신 지원해주는 사업이다. 한부모가정이면 더 우대해준다.',
    video: '76v5RiXhb7M',
    className: 'school-gurye-image', // 고유 클래스
  },
];

const Han = () => {
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
            <div className="sub-MainTitle">한부모 가정/ 저출생</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {hanLinks.map((link, index) => (
          <div className="sub-han__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-han__img ${link.className}`}
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

export default Han;
