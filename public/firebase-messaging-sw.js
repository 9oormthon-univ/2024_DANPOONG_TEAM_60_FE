importScripts(
    "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
);

self.addEventListener("install", function (e) {
    self.skipWaiting();
});

self.addEventListener("activate", function (e) {
    console.log("fcm service worker가 실행되었습니다.");
});

const firebaseConfig = {
    apiKey: "AIzaSyAAnZaALoGwQ2XEZcYVoJu99d_9JHbfftw",
    authDomain: "goorm-2dae7.firebaseapp.com",
    projectId: "goorm-2dae7",
    storageBucket: "goorm-2dae7.firebasestorage.app",
    messagingSenderId: "246219988600",
    appId: "1:246219988600:web:36151278b487958c79178d",
    measurementId: "G-SS3P0PGPWF"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.title;
    const notificationOptions = {
        body: payload.body
        // icon: payload.icon
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});