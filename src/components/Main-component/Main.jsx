// main 섹션 통합 파일
import React from 'react';
import '../../assets/css/main/main.css'

const Main = ({ children }) => {
  return (
    <main id="main" role="main" className='main'>
      <div className='main-container'>
        {children}
      </div>
    </main>
  );
};

export default Main;