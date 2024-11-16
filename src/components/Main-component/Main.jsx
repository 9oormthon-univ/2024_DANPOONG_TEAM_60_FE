// main 섹션 통합 파일
import React from 'react';

const Main = ({ children }) => {
  return (
    <main id="main" role="main">
      {children}
    </main>
  );
};

export default Main;
