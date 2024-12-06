import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/chiup.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import JanHak from '../../assets/images/sub/JanHak.png';
import Gujik from '../../assets/images/sub/education/Gujik.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const chiupLinks = [
  {
    href: 'https://job.mpva.go.kr/main.do#MAIN',
    imgSrc: korean,
    alt: '국가보훈대상자 취업능력개발지원',
    title: '국가보훈대상자\n취업능력개발지원',
    explan:
      '국가보훈대상자 취업능력개발지원이란 보훈대상자가 공무원 채용시험, 교원임용고사, 외국어 및 정보화 과정, 간호조무사 과정 등을 수강할 경우 그 비용의 일부를 지원함으로써 취업경쟁력을 향상시켜 취업을 촉진하고 직업능력향상을 위한 자격증을 습득하게 하여 평생직장 정착에 기여하게 만드는 제도이다. 대표적 지원 대상은 국가유공자 본인 및 배우자,자녀, (조)부모이다.',
    video: 'UQULpEOU0aw',
    className: 'chiup-korean-image', // 고유 클래스
    customClass: 'korean-button',
  },
  {
    href: 'https://www.kosaf.go.kr/ko/tuition.do?pg=tuition05_01_01',
    imgSrc: JanHak,
    alt: '취업 후 상환 학자금대출',
    title: '취업 후 상환 학자금대출',
    explan:
      '취업 후 상환 학자금 대출은 학부생뿐만 아니라, 대학원생까지 신청할 수 있다. 다만, 연령 및 학자금 지원 구간을 충족해야 하는 등 학자금 대출 조건이 있다. 등록금은 물론, 생활비 명목의 대출까지 가능하다. 다만 여러 대출 범위 및 규모에 한도가 있고, 여러 조건들도 존재하니 꼼꼼하게 확인하고 신청하자. (가장 좋은 건 일단 신청하고 보는 것)',
    video: 'wf1ZpP-yPBE',
    className: 'chiup-janhak-image', // 고유 클래스
    customClass: 'janHak-button',
  },
  {
    href: 'https://www.gyeongnam.go.kr/mydata/',
    imgSrc: Gujik,
    alt: '청년구직활동수당 지원사업',
    title: '청년구직활동수당 지원사업',
    explan:
      '청년구직활동수당 지원사업이란 구직 중 최소한으로 생활 안정을 위하여 최대 300(월 50만원 X 6개월)만원까지도 지원하는 제도이다. 저소득 구직자에게는 생계를 위한 최소한의 소득도 지원하는 제도이다.',
    video: 'cm3jyXRsqlg',
    className: 'chiup-gujik-image', // 고유 클래스
    customClass: 'gujik-button',
  },
];

const Chiup = () => {
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
            <div className="sub-MainTitle">취업</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {chiupLinks.map((link, index) => (
          <div className="sub-chiup__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-chiup__img ${link.className}`}
                  src={link.imgSrc}
                  alt={link.alt}
                />
                <p className="sub-educationTitle">{link.title}</p>
              </div>
            </a>
            <button
              className={link.customClass}
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

export default Chiup;
