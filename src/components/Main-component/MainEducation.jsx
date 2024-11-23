// 복지 지원 섹션 파일
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/main/MainEducation.css';
import edu from '../../assets/images/main/edu_icon.png';
import arrow from '../../assets/images/main/arrow_icon.png';
import { initializeApp } from "firebase/app";
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
                console.log("토큰", token);
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


const MainEducation = () => {
  return (
    <div onClick={handleAllowNotification} className='welfare-container'>
      <p>본인에게 필요한 교육을 찾아보세요.</p>
      <Link className='btn-container' to='/SubEducation'>
        <div className='icon-container'>
          <img src={edu} alt='edu' className='edu-icon-img' />
        </div>
        <div className='text-container'>
          <div className='title'>교육 지원</div>
          <div className='content'>필요한 교육 알림받기</div>
        </div>
        <img src={arrow} alt='arrow' className='arrow-icon-img' />
      </Link>
    </div>
  );
};

export default MainEducation;