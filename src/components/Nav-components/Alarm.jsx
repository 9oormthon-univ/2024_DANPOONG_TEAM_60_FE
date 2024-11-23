import React from "react";
import axios from "axios";
import alarm from "../../assets/images/nav/alarm_img.png";
import arrowLeft from "../../assets/images/nav/arrow_left(black).png";
import "../../assets/css/nav/Alarm.css";

const Alarm = () => {
  const handlePushNotification = async () => {
    try {
      const accessToken = localStorage.getItem("access_token"); // 로컬 스토리지에서 액세스 토큰 가져오기

      if (!accessToken) {
        alert("로그인이 필요합니다.");
        return;
      }

      // 사용자의 푸시 토큰을 등록하기 위한 요청
      const registrationResponse = await axios.post(
        "https://kapi.kakao.com/v2/push/register",
        {
          uuid: "사용자_고유_아이디", // 사용자 고유의 UUID를 사용
          push_type: "gcm", // 구글 클라우드 메시징 사용
          push_token: "사용자_푸시_토큰", // 사용자의 디바이스에서 받아온 푸시 토큰
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (registrationResponse.status === 200) {
        // 성공적으로 푸시 토큰이 등록되었을 때
        alert("카카오톡 푸시 알림이 설정되었습니다.");
      }
    } catch (error) {
      console.error("푸시 알림 설정 중 오류 발생:", error);
      alert("푸시 알림 설정 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="view-container">
      <div className="alarm-container">
      <div className="alarm-header">
        <img src={arrowLeft} alt="arrow-left" className="arrow-left" /> 
        <p>돌아가기</p>
      </div>
        <img src={alarm} alt="alarm" className="alarm-image" />
        <button className="alarm-btn" onClick={handlePushNotification}>
          카카오톡으로 알림받기
        </button>
        <div className="alarm-info">•  앱으로 들어가지 않아도 카카오톡으로</div>
        <div className="alarm-info-bottom">
          함께가치의 알림을 받을 수 있어요.
        </div>
      </div>
    </div>
  );
};

export default Alarm;
