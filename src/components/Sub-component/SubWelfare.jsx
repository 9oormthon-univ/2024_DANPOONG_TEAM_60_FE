// 서브페이지 - 복지 지원
import React from 'react';
import '../../assets/css/sub/sub.css';
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';
import korean from '../../assets/images/sub/korean.png';

const SubWelfare = () => {
  return (
    <>
      <header>
        <div className="sub-Header">
          <img src={WhiteArrow} alt="icon" />
          <div className="sub-MainTitle">복지 지원</div>
        </div>
      </header>
      <main>
        <div className="sub-Background">
          <div className="sub-Welfare__container">
            <a href="https://www.mohw.go.kr/">
              <img src={korean} alt="보건복지부" />
            </a>
            <div className="sub-ContainTitle"></div>
          </div>
          <div className="sub-Welfare__container">국토교통부</div>
          <div className="sub-Welfare__container">보조금 24</div>
          <div className="sub-Welfare__container">복지로</div>
          <div className="sub-Welfare__container">한국장학재단</div>
          <div className="sub-Welfare__container">행정안전부</div>
        </div>
      </main>
    </>
  );
};

export default SubWelfare;
