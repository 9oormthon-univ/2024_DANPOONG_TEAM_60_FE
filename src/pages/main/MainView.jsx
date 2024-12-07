import React, { useState, useEffect } from 'react';
import '../../assets/css/main/MainView.css';
import MainHeader from '../../components/Main-component/MainHeader';
import Main from '../../components/Main-component/Main';
import MainIntro from '../../components/Main-component/MainIntro';
import MainWelfare from '../../components/Main-component/MainWelfare';
import MainHealth from '../../components/Main-component/MainHealth';
import MainEducation from '../../components/Main-component/MainEducation';
import MainUrgent from '../../components/Main-component/MainUrgent';
import MainLive from '../../components/Main-component/MainLive';
import NavbarGuide from '../../components/Nav-components/NavbarGuide';
import styled from 'styled-components';

// 메인 페이지 뷰 파일
const MainView = () => {

  const [showGuide, setShowGuide] = useState(true);

  const handleGuideComplete = () => {
    setShowGuide(false);
    localStorage.setItem('guideShown', 'true');
  };

  useEffect(() => {
    const guideShown = localStorage.getItem('guideShown');
    if (guideShown) {
      setShowGuide(false);
    }
  }, []);

  useEffect(() => {
    if (showGuide) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showGuide]);

  return (
    <div className="view-container">
      <MainHeader />
      <Main>
        <MainIntro />
        <MainWelfare />
        <MainHealth />
        <MainEducation />
        <MainUrgent />
        <MainLive />
      </Main>
      {showGuide && <NavbarGuide onGuideComplete={handleGuideComplete} />}
    </div>
  );
};

export default MainView;
