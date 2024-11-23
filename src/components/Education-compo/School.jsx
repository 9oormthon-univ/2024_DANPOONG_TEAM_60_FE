import React from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/school.css';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import BockJiRo from '../../assets/images/sub/BockJiRo.png';
import GyeongSang from '../../assets/images/sub/education/GyeongSang.png';
import SeoulSi from '../../assets/images/sub/education/SeoulSi.png';
import NaJu from '../../assets/images/sub/education/NaJu.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const schoolLinks = [
  {
    href: 'https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=316&boardSeq=94113&lev=0&searchType=null&statusYN=W&page=1&s=moe&m=0302&opType=N',
    imgSrc: korean,
    alt: '초중고 교육비 지원사업',
    title: '초중고 교육비 지원사업',
    className: 'school-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.easylaw.go.kr/CSP/CnpClsMainBtr.laf?csmSeq=626&ccfNo=2&cciNo=3&cnpClsNo=1',
    imgSrc: korean,
    alt: '방과후 보육료 지원',
    title: '방과후 보육료 지원',
    className: 'school-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000867&wlfareInfoReldBztpCd=01',
    imgSrc: BockJiRo,
    alt: '방과후 학교 자유수강권',
    title: '방과후 학교 자유수강권',
    className: 'school-bockJiRo-image', // 고유 클래스
  },
  {
    href: 'https://www.gov.kr/portal/service/serviceInfo/WII000001600',
    imgSrc: korean,
    alt: '청소년 특별지원',
    title: '청소년 특별지원',
    className: 'school-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.gne.go.kr/gne/index.do#section2',
    imgSrc: GyeongSang,
    alt: '다자녀 학생 교육비 지원사업',
    title: '다자녀 학생 교육비 지원사업',
    className: 'school-gyeongSang-image', // 고유 클래스
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001103',
    imgSrc: BockJiRo,
    alt: '중,고등학교 신입생 교육비 지원',
    title: '중,고등학교 신입생 교육비 지원',
    className: 'school-bockJiRo-image', // 고유 클래스
  },
  {
    href: 'https://buseo.sen.go.kr/buseo/bu07/user/bbs/BD_selectBbsList.do?q_bbsSn=1218',
    imgSrc: SeoulSi,
    alt: '서울특별시교육청 방과후학교 자유수강권 지원',
    title: '서울특별시교육청 방과후학교 \n자유수강권 지원',
    className: 'school-seoulSi-image', // 고유 클래스
  },
  {
    href: 'https://www.naju.go.kr/www/field_info/life',
    imgSrc: NaJu,
    alt: '초등학교 입학지원금 지급 사업',
    title: '초등학교 입학지원금 지급 사업',
    className: 'school-naJu-image', // 고유 클래스
  },
  {
    href: 'https://www.naju.go.kr/www/field_info/life',
    imgSrc: NaJu,
    alt: '나주시 중고교 신입생 교복 지원 사업',
    title: '나주시 중고교 신입생 교복 지원 사업',
    className: 'school-naJu-image', // 고유 클래스
  },
];

const School = () => {
  return (
    <>
      <header>
        <div className="sub-Header">
          <Link to="/SubEducation">
            <div className="flex">
              <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
              <div className="sub-MainTitle">학교</div>
            </div>
          </Link>
        </div>
      </header>
      <main>
        <div className="sub-Background">
          {schoolLinks.map((link, index) => (
            <div className="sub-school__container" key={index}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <div className="flex">
                  <img
                    className={`sub-school__img ${link.className}`}
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

export default School;
