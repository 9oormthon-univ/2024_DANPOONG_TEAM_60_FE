// 라우팅을 담당하는 파일
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from '../pages/main/MainView';
import LoadingView from '../pages/main/LoadingView';
import Login from '../pages/LoginView';
import Nav from '../components/Navbar';

// sub
import SubWelfare from '../components/Sub-component/SubWelfare';
import SubHealth from '../components/Sub-component/SubHealth';
import SubEducation from '../components/Sub-component/SubEducation';
import SubUrgent from '../components/Sub-component/SubUrgent';
import SubLive from '../components/Sub-component/SubLive';
import LoginSuccess from '../components/Login-component/LoginSuccess';

// nav
import Alarm from '../components/Nav-components/Alarm';
import Board from '../components/Nav-components/Board';
import Chat from '../components/Nav-components/Chat';
import BoardWrite from '../components/Nav-components/BoardWrite';

// edu
import Chiup from '../components/Education-compo/Chiup';
import School from '../components/Education-compo/School';
import Han from '../components/Education-compo/Han';
import Jangae from '../components/Education-compo/Jangae';
import Jungbo from '../components/Education-compo/Jungbo';
import Out from '../components/Education-compo/Out';

import Chatbot from '../components/Main-component/Chatbot';

const App = () => {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='chatbot' element={<Chatbot />} />

        <Route path="/" element={<LoadingView />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<MainView />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />

        <Route path="/SubWelfare" element={<SubWelfare />} />
        <Route path="/SubHealth" element={<SubHealth />} />
        <Route path="/SubEducation" element={<SubEducation />} />
        <Route path="/SubUrgent" element={<SubUrgent />} />
        <Route path="/SubLive" element={<SubLive />} />

        {/* education */}
        <Route path="/Chiup" element={<Chiup />} />
        <Route path="/School" element={<School />} />
        <Route path="/Han" element={<Han />} />
        <Route path="/Jangae" element={<Jangae />} />
        <Route path="/Jungbo" element={<Jungbo />} />
        <Route path="/Out" element={<Out />} />

        <Route path="/Alarm" element={<Alarm />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/boardwrite" element={<BoardWrite />} />
      </Routes>
      <Nav />
      
    </BrowserRouter>
  );
};

export default App;
