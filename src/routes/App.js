// 라우팅을 담당하는 파일
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from '../pages/main/MainView';
import LoadingView from '../pages/main/LoadingView';
import Login from '../pages/LoginView';

// sub
import SubWelfare from '../components/Sub-component/SubWelfare';
import SubHealth from '../components/Sub-component/SubHealth';
import SubEducation from '../components/Sub-component/SubEducation';
import SubUrgent from '../components/Sub-component/SubUrgent';
import SubLive from '../components/Sub-component/SubLive';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingView />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<MainView />} />
        <Route path="/SubWelfare" element={<SubWelfare />} />
        <Route path="/SubHealth" element={<SubHealth />} />
        <Route path="/SubEducation" element={<SubEducation />} />
        <Route path="/SubUrgent" element={<SubUrgent />} />
        <Route path="/SubLive" element={<SubLive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
