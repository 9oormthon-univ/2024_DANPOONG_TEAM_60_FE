// 라우팅을 담당하는 파일
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from '../pages/main/MainView';
import LoadingView from '../pages/main/LoadingView';
import Login from '../pages/LoginView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingView />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
