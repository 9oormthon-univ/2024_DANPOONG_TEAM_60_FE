import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Main');
    }, 1000); // 1초 뒤에 /Main 주소로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return <div>로그인에 성공했습니다. 잠시 후 메인 페이지로 이동합니다...</div>;
};

export default LoginSuccess;
