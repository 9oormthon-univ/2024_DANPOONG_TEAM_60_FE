import React from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/out.css';

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
    className: 'out-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.mogef.go.kr/mi/osg/mi_osg_s003.do?classId=1098&className=%EB%8B%A4%EB%AC%B8%ED%99%94%EA%B0%80%EC%A1%B1%EA%B3%BC',
    imgSrc: korean,
    alt: '다문화가족 자녀 교육활동비 지원',
    title: '다문화가족 자녀 교육활동비 지원',
    className: 'out-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.nyj.go.kr/iframe/selectBbsNttView.do?key=51&bbsNo=62&nttNo=402466&pageUnit=10&pageIndex=92&searchCnd=all',
    imgSrc: Namyang,
    alt: '가정위탁아동 능력개발비',
    title: '가정위탁아동 능력개발비',
    className: 'out-namyang-image', // 고유 클래스
  },
  {
    href: 'https://www.suncheon.go.kr/kr/open/0003/0003/0001/?mode=view&cntId=317',
    imgSrc: SunCheon,
    alt: '다문화가족 안정적 정착 지원',
    title: '다문화가족 안정적 정착 지원',
    className: 'out-sunCheon-image', // 고유 클래스
  },
  {
    href: 'https://www.goodneighbors.kr/',
    imgSrc: Good,
    alt: '신한 위기가정 재기지원사업',
    title: '신한 위기가정 재기지원사업',
    className: 'out-good-image', // 고유 클래스
  },
];

const Out = () => {
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Out;
