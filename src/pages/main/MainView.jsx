import React from 'react';
import '../../assets/css/main/MainView.css'
import MainHeader from '../../components/Main-component/MainHeader';
import Main from '../../components/Main-component/Main';
import MainIntro from '../../components/Main-component/MainIntro';
import MainWelfare from '../../components/Main-component/MainWelfare';
import MainHealth from '../../components/Main-component/MainHealth';
import MainEducation from '../../components/Main-component/MainEducation';
import MainUrgent from '../../components/Main-component/MainUrgent';
import MainLive from '../../components/Main-component/MainLive';
import MainFooter from '../../components/Main-component/MainFooter';

// 메인 페이지 뷰 파일
const MainView = () => {
  return (
    <div className='view-container'>
      <MainHeader />
      <Main>
        <MainIntro />
        <MainWelfare />
        <MainHealth />
        <MainEducation />
        <MainUrgent />
        <MainLive />
      </Main>
    </div>
  );
};

export default MainView;
