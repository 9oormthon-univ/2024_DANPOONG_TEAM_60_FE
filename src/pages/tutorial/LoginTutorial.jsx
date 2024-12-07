import React from "react";
import "../../assets/css/tutorial/LoginTutorial.css"
import order from "../../assets/images/tutorial/tut1.png";
import mainimg from "../../assets/images/tutorial/login_tut.png";
import { Link } from "react-router-dom";

const LoginTutorial = ({ onNext }) => {
    return (
      <div className="tutorial-container" onClick={onNext}>
        {/* Skip 버튼 */}
        <Link to="/login" className="skipbtn">
                Skip
            </Link>
            <img src={order} alt="order" className="order-img"/>
            <div className="tutorial-title">편하게 카카오 로그인으로</div>
            <div className="tutorial-content">매번 귀찮은 회원가입은 이제 그만!</div>
            <div className="tutorial-content">카카오 로그인으로 쉽게 로그인하세요.</div>
            <img src={mainimg} alt="mainimg" className="main-img" />
        </div>
    );
}

export default LoginTutorial;