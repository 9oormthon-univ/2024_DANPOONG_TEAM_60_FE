// 라우팅을 담당하는 파일
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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
import PostDetail from '../components/Nav-components/PostDetail';

// edu
import Chiup from '../components/Education-compo/Chiup';
import School from '../components/Education-compo/School';
import Han from '../components/Education-compo/Han';
import Jangae from '../components/Education-compo/Jangae';
import Jungbo from '../components/Education-compo/Jungbo';
import Out from '../components/Education-compo/Out';

//tutorial
import LoginTutorial from '../pages/tutorial/LoginTutorial';
import MainTutorial from '../pages/tutorial/MainTutorial';
import HealthTutorial from '../pages/tutorial/HealthTutorial';
import SubExplainTutorial from '../pages/tutorial/SubExplainTutorial';
import SubTutorial from '../pages/tutorial/SubTutorial';
import ChatTutorial from '../pages/tutorial/ChatTutorial';
import AlarmTutorial from '../pages/tutorial/AlarmTutorial';
import BoardTutorial from '../pages/tutorial/BoardTutorial';

import Chatbot from '../components/Main-component/Chatbot';

const tutorialComponents = [
  LoginTutorial,
  MainTutorial,
  HealthTutorial,
  SubExplainTutorial,
  SubTutorial,
  ChatTutorial,
  AlarmTutorial,
  BoardTutorial,
];

const TutorialNavigator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < tutorialComponents.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigate('/Login'); // 튜토리얼이 끝나면 메인 화면으로 이동
    }
  };

  const CurrentTutorial = tutorialComponents[currentStep];

  return <CurrentTutorial onNext={handleNext} />;
};

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
        <Route path="/post/:postId" element={<PostDetail />} />

        {/*tutorial*/}
        <Route path="/logintutorial" element={<LoginTutorial />} />
        <Route path="/alarmtutorial" element={<AlarmTutorial />} />
        <Route path="/boardtutorial" element={<BoardTutorial />} />
        <Route path="/chattutorial" element={<ChatTutorial />} />
        <Route path="/healthtutorial" element={<HealthTutorial />} />
        <Route path="/maintutorial" element={<MainTutorial />} />
        <Route path="/subtutorial" element={<SubTutorial />} />
        <Route path="/subexplaintutorial" element={<SubExplainTutorial />} />
        <Route path="/tutorial" element={<TutorialNavigator />} />
      </Routes>
      <Nav />
      
    </BrowserRouter>
  );
};

export default App;
