import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/LoadingView.css";
import Ham from "../../assets/images/loading/Ham(white).png";
import gge from "../../assets/images/loading/gge(white).png";
import ga from "../../assets/images/loading/ga(white).png";
import chi from "../../assets/images/loading/chi(white).png";

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
