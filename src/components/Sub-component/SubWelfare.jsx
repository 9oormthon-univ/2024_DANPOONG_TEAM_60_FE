// 서브페이지 - 복지 지원
import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';
import '../../assets/css/sub/quarter/sub-welfare.css';

// youtube 라이브러리
import YouTube from 'react-youtube';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';
import BockJiRo from '../../assets/images/sub/BockJiRo.png';
import JanHak from '../../assets/images/sub/JanHak.png';

// Link
import { Link } from 'react-router-dom';

// 링크 데이터 정의
const welfareLinks = [
  {
    href: 'https://www.mohw.go.kr',
    imgSrc: korean,
    alt: '보건복지부',
    title: '보건복지부',
    explan:
      '국가는 노인과 청소년의 복지 향상을 위한 정책을 실시할 의무를 진다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 학교 교육 및 평생 교육을 포함한 교육 제도와 그 운영, 교육 재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.',
    video: 'nn2l96PkXDk',
    className: 'korean-image', // 고유 클래스
  },
  {
    href: 'https://www.molit.go.kr/portal.do#mltm',
    imgSrc: korean,
    alt: '국토교통부',
    title: '국토교통부',
    explan:
      '국토교통부란 대한민국의 장관급 중앙행정기관이다. 국토와 사회간접자본의 관리 및 계획,개발,주택,도시,건설,교통에 대한 사무를 관리한다. 국토 정책도 다루며 그 밖에 전반적으로 국토에 관한 많은 정책을 다루고 있다.',
    video: 'wTzHDw7_bWs',
    className: 'korean-image', // 고유 클래스
  },
  {
    href: 'https://www.gov.kr/portal/main/nologin',
    imgSrc: korean,
    alt: '보조금 24',
    title: '보조금 24',
    explan:
      '보조금 24는 정부 24에서 지원해주는 서비스 중 하나이다. 각종 보조금을 한 번에 확인하거나 신청할 수 있다. 로그인하면 자신에게 맞는 혜택도 확인할 수 있다.',
    video: 'C3Tq2sI1-Xs',
    className: 'korean-image', // 고유 클래스
  },
  {
    href: 'https://www.bokjiro.go.kr/ssis-tbu/index.do',
    imgSrc: BockJiRo,
    alt: '복지로',
    title: '복지로',
    explan:
      '받을 수 있는 복지서비스를 맞춤형으로 찾아서 안내해 주는 제도이다. "나에게 필요한 급여와 내가 받을 수 있는 급여"를 생애주기별로 적극적으로 찾아준다. 대한민국의 맞춤형 복지서비스를 제공하는 복지포털이다.',
    video: '_Ph06yrMGH4',
    className: 'bockJiRo-image', // 고유 클래스
  },
  {
    href: 'https://www.kosaf.go.kr/ko/main.do',
    imgSrc: JanHak,
    alt: '한국장학재단',
    title: '한국장학재단',
    explan:
      '대학생에 대한 학자금 지원을 하는, 교육부 산하 위탁집행형 준정부기관. 반값등록금 시위가 계속되던 이명박 정부 시절 그 대신 대학생의 부담을 조금이라도 덜어주려 정부에서 만든 재단이다. 학자금 대출과 상환, 장학금 선정 및 수혜 등의 업무와 지도자 코멘티, 지식봉사활동 등을 수행한다.',
    video: '2wPEBlKWFkI',
    className: 'janHak-image', // 고유 클래스
  },
  {
    href: 'https://www.mois.go.kr/frt/a01/frtMain.do',
    imgSrc: korean,
    alt: '행정안전부',
    title: '행정안전부',
    explan:
      '대한민국의 장관급 중앙행정기관이다. 국가 행정의 사무, 치안, 내정과 지방자치, 그리고 독립 부서의 소관이 아닌 모든 기능을 담당한다. 그리고 행정안전부에서 매달 전국 각 지자체에서 집계한 주민등록 인구 통계도 발표하고 있다. 말 그대로 왠만한 국가의 행정을 대부분 담당한다고 생각하면 된다.',
    video: '1cuOyHjkgkY',
    className: 'korean-image', // 고유 클래스
  },
];

const SubWelfare = () => {
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
        <Link to="/Main">
          <div className="flex">
            <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
            <div className="sub-MainTitle">복지 지원</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        {welfareLinks.map((link, index) => (
          <div className="sub-Welfare__container" key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <img
                  className={`sub-Welfare__img ${link.className}`}
                  src={link.imgSrc}
                  alt={link.alt}
                />
                <p className="sub-Welfare__ContainTitle">{link.title}</p>
              </div>
            </a>
            <button
              className="dropdown-button"
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

export default SubWelfare;
