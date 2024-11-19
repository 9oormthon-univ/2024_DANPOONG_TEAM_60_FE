import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LoadingView.css";
import Ham from "../../assets/Ham(white).png";
import gge from "../../assets/gge(white).png";
import ga from "../../assets/ga(white).png";
import chi from "../../assets/chi(white).png";

const LoadingView = () => {
  const navigate = useNavigate();
  const images = [Ham, gge, ga, chi];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Login");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="animated-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="animated-image" />
        ))}
      </div>
    </div>
  );
};

export default LoadingView;
