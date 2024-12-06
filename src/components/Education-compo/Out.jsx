import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/out.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import Namyang from '../../assets/images/sub/education/Namyang.png';
import SunCheon from '../../assets/images/sub/education/SunCheon.png';
import Good from '../../assets/images/sub/education/Good.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const outLinks = [
  {
    href: 'https://www.mohw.go.kr/board.es?mid=a10409020000&bid=0026&list_no=1479811&act=view',
    imgSrc: korean,
    alt: '지역사회서비스 투자사업',
    title: '지역사회서비스 투자사업',
    explan:
      '지역사회서비스 투자사업은 보건복지부에서 시행하는 사업으로, 각종 저소득계층 및 사회소회계층을 도와주는 사회서비스에 투자하는 사업이다.',
    video: 'it5nvs_RZOY',
    className: 'out-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.mogef.go.kr/mi/osg/mi_osg_s003.do?classId=1098&className=%EB%8B%A4%EB%AC%B8%ED%99%94%EA%B0%80%EC%A1%B1%EA%B3%BC',
    imgSrc: korean,
    alt: '다문화가족 자녀 교육활동비 지원',
    title: '다문화가족 자녀\n교육활동비 지원',
    explan:
      '다문화가족 자녀 교육활동비 지원은 다문화가족을 상대로, 여성가족부에서 자녀분들의 교육활동비를 지원해주는 서비스이다.',
    video: 'U21CSw2kZng',
    className: 'out-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.nyj.go.kr/iframe/selectBbsNttView.do?key=51&bbsNo=62&nttNo=402466&pageUnit=10&pageIndex=92&searchCnd=all',
    imgSrc: Namyang,
    alt: '가정위탁아동 능력개발비',
    title: '가정위탁아동 능력개발비',
    explan:
      '가정위탁아동 능력개발비는 초,중,고 재학생에게 기초학습 교과목 분야, 예체능 분야, 진로탐색 및 작업훈련 분야의 능력개발비를 지원해주는 사업이다.',
    video: 'K7cuYkL2oHo',
    className: 'out-namyang-image', // 고유 클래스
    customClass: 'namyang-button',
  },
  {
    href: 'https://www.suncheon.go.kr/kr/open/0003/0003/0001/?mode=view&cntId=317',
    imgSrc: SunCheon,
    alt: '다문화가족 안정적 정착 지원',
    title: '다문화가족 안정적 정착 지원',
    explan:
      '다문화가족 안정적 정착 지원은 순천시에서 지원해주는 사업으로, 다문화가족들의 안정적 정착을 위한 여러 방문교육사업, 한국어 교육서비스 등등을 지원해준다.',
    video: 'eXBLn9kvaXY',
    className: 'out-sunCheon-image', // 고유 클래스
  },
  {
    href: 'https://www.goodneighbors.kr/',
    imgSrc: Good,
    alt: '신한 위기가정 재기지원사업',
    title: '신한 위기가정 재기지원사업',
    explan:
      '신한 위기가정 재기지원사업은 신한은행에서 지원하는 사업으로, 위기가정 및 학대피해아동 재기를 위한 맞춤형 지원을 해준다. 감당하기 힘든 의료비나 일상을 도와주는 생활비 등을 지원해준다.',
    video: 'hgIEQF7X1FM',
    className: 'out-good-image', // 고유 클래스
  },
];

const Out = () => {
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
            <div className="sub-MainTitle">기타</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {outLinks.map((link, index) => (
          <div className="sub-out__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-out__img ${link.className}`}
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

export default Out;
