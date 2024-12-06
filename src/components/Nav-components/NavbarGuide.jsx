import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBubble = styled.div`
  position: absolute;
  background: #000;
  color: #fff;
  padding: 8px;
  border-radius: 10px;
  font-size: 12px;
  bottom: 70px; /* Navbar 바로 위에 위치하도록 설정 */
  left: ${({ left }) => left}px;
  z-index: 200;
`;

const NavbarGuide = ({ onGuideComplete }) => {
  const [step, setStep] = useState(0);

  const bubbles = [
    { text: '홈 버튼을 클릭하여 메인 화면으로 이동하세요.', left: 0 },
    { text: '채팅 버튼을 클릭하여 소통할 수 있어요.', left: 70 },
    { text: '알림 버튼으로 새로운 정보를 확인하세요.', left: 150 },
    { text: '게시판 버튼으로 다양한 글을 읽고 작성하세요.', left: 200 },
  ];

  useEffect(() => {
    if (step >= bubbles.length) {
      // 가이드가 끝나면 부모 컴포넌트에서 처리
      onGuideComplete();
    }
  }, [step, bubbles.length, onGuideComplete]);

  const handleClick = () => {
    if (step < bubbles.length) {
      setStep(step + 1);
    }
  };

  if (step >= bubbles.length) {
    return null;
  }

  return (
    <NavBubble left={bubbles[step].left} onClick={handleClick}>
      {bubbles[step].text}
    </NavBubble>
  );
};

export default NavbarGuide; 
