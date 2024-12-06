import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/sub-education/school.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

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
    explan:
      '초중고 교육비 지원사업이란 초등학교,중학교,고등학교에 들어가는 교육비를 지원해주는 사업이다. 각 가구원수와 거주지, 법정자격 여부 등에 따라서 지원되는 비용이 달라진다.',
    video: 'e5zM7jJcO98',
    className: 'school-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.easylaw.go.kr/CSP/CnpClsMainBtr.laf?csmSeq=626&ccfNo=2&cciNo=3&cnpClsNo=1',
    imgSrc: korean,
    alt: '방과후 보육료 지원',
    title: '방과후 보육료 지원',
    explan:
      '방과후 보육료 지원은 저소득 및 장애아동에 해당하는 취학 아동에게 방과 후 보육로를 지원함으로써 저소득층 아동의 방과 후 어리닝 집 서비스 이용의 기회를 제공한다.',
    video: 'MX1Ev408S9E',
    className: 'school-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000867&wlfareInfoReldBztpCd=01',
    imgSrc: BockJiRo,
    alt: '방과후 학교 자유수강권',
    title: '방과후 학교 자유수강권',
    explan:
      '방과후 학교 자유수강권은 방과후학교 수업을 통해 저소득층 자녀의 지속적이며 실질적인 교육기회를 확대하고 공교육 활성화 및 저소득층의 교육격차 해소를 돕는다.',
    video: 'eLOFETAzmnk',
    className: 'school-bockJiRo-image', // 고유 클래스
  },
  {
    href: 'https://www.gov.kr/portal/service/serviceInfo/WII000001600',
    imgSrc: korean,
    alt: '청소년 특별지원',
    title: '청소년 특별지원',
    explan:
      '청소년 특별지원은 보호자가 없거나, 실질적으로 보호자의 보호를 받지 못하는 사회, 경제적으로 어려움이 있는 위기청소년이 올바르게 성장하고 안정된 생활을 할 수 있도록 지원한다.',
    video: 'WSMvtins780',
    className: 'school-korean-image', // 고유 클래스
  },
  {
    href: 'https://www.gne.go.kr/gne/index.do#section2',
    imgSrc: GyeongSang,
    alt: '다자녀 학생 교육비 지원사업',
    title: '다자녀 학생 교육비 지원사업',
    explan:
      '다자녀 학생 교육비 지원사업은. 1. 다자녀 학생 교육비 지원으로 국가적 출산 장려 정책에 기여2. 다자녀 가정에 교육비 지원을 통해 학부모의 경제적 부담 경감하도록 지원해준다.',
    video: '6fS72_mgv1Y',
    className: 'school-gyeongSang-image', // 고유 클래스
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001103',
    imgSrc: BockJiRo,
    alt: '중,고등학교 신입생 교육비 지원',
    title: '중,고등학교 신입생 교육비 지원',
    explan:
      '중,고등학교 신입생 교육비 지원은 교육의 공공성을 강화하고 보편적 교유복지의 실현, 힉생 간의 교육 격차 해소로 평등한 교육 환경을 조성하는 사업이다.',
    video: '91pKE_5cPxA',
    className: 'school-bockJiRo-image', // 고유 클래스
  },
  {
    href: 'https://buseo.sen.go.kr/buseo/bu07/user/bbs/BD_selectBbsList.do?q_bbsSn=1218',
    imgSrc: SeoulSi,
    alt: '서울특별시교육청 방과후학교 자유수강권 지원',
    title: '서울특별시교육청 방과후학교 \n자유수강권 지원',
    explan: '서울특별시교육청에서 방과후학교 자유수강권을 지원해준다.',
    video: 'eLOFETAzmnk',
    className: 'school-seoulSi-image', // 고유 클래스
  },
  {
    href: 'https://www.naju.go.kr/www/field_info/life',
    imgSrc: NaJu,
    alt: '초등학교 입학지원금 지급 사업',
    title: '초등학교 입학지원금 지급 사업',
    explan:
      '초등학교 입학지원금 지급 사업은 해당 년도의 신입생들의 입학지원금을 지급해주는 사업이다. 1인당 20만원의 금액을 지원해준다.',
    video: 'mwc2JhnOd64',
    className: 'school-naJu-image', // 고유 클래스
    customClass: 'naJu-button',
  },
  {
    href: 'https://www.naju.go.kr/www/field_info/life',
    imgSrc: NaJu,
    alt: '나주시 중고교 신입생 교복 지원 사업',
    title: '나주시 중고교 신입생\n교복 지원 사업',
    explan:
      '전라남도 나주시는 중고교를 대상으로 신입생들에게 교복 무상 지원 사업을 시행하고 있다.',
    video: 'LBAqDeqRIRo',
    className: 'school-naJu-image', // 고유 클래스
    customClass: 'naJu-button',
  },
];

const School = () => {
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
            <div className="sub-MainTitle">학교</div>
          </div>
        </Link>
      </div>

      <div className="sub-school-Background">
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

export default School;
