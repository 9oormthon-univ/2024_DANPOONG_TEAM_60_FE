import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/LoadingView.css";

const LoadingView = () => {
  const navigate = useNavigate();
  const text = "함께가치";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Login");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="animated-container">
          <span className="animated-letter">
            {text}
          </span>
      </div>
    </div>
  );
};

export default LoadingView;
