// 렌더링 파일
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import Nav from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
  </React.StrictMode>
);
