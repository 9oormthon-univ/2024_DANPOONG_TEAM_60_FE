import React from "react";
import axios from "axios";
import alarm from "../../assets/images/nav/alarm_img.png";
import arrowLeft from "../../assets/images/nav/arrow_left(black).png";
import "../../assets/css/nav/Alarm.css";import { initializeApp } from "firebase/app";
import { getToken } from "firebase/messaging";
import { getMessaging, onMessage } from "firebase/messaging";
import { registerServiceWorker } from "./registerServiceWorker.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAnZaALoGwQ2XEZcYVoJu99d_9JHbfftw",
    authDomain: "goorm-2dae7.firebaseapp.com",
    projectId: "goorm-2dae7",
    storageBucket: "goorm-2dae7.firebasestorage.app",
    messagingSenderId: "246219988600",
    appId: "1:246219988600:web:36151278b487958c79178d",
    measurementId: "G-SS3P0PGPWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
console.log("기초 설정 완료");

export async function handleAllowNotification() {
    registerServiceWorker();
    try {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: "BHXRXqhiFaBr2OZC4qTQz7t_qGJc6m6NuxtWku4Xpw_fCZYvz_uiNVq2dlDzEP7VMHsjaxPJmCIPduCfBgaxemk"
            });
            if (token) {
                const link = "/notifications/add-token?token="+token+"&type=web";
                console.log("토큰", token);
                console.log("http://3.93.236.79:8080/notifications/add-token?token="+token+"&type=web");
                axios.get(link, {withCredentials:false});
            } else {
                alert(
                    "토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요"
                );
            }
        } else if (permission === "denied") {
            alert(
                "알림 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요"
            );
        }
    } catch (error) {
        console.error("푸시 토큰 가져오는 중에 에러 발생", error);
    }
}

onMessage(messaging, (payload) => {
    // console.log("알림 도착 ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };

    if (Notification.permission === "granted") {
        new Notification(notificationTitle, notificationOptions);
    }
});



const Alarm = () => {
  

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="view-container">
      <div className="alarm-container">
      <div className="alarm-header">
        <img src={arrowLeft} alt="arrow-left" className="arrow-left" onClick={handleBackClick} /> 
        <p>돌아가기</p>
      </div>
        <img src={alarm} alt="alarm" className="alarm-image" />
        <button className="alarm-btn" onClick={handleAllowNotification}>
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
