importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBCdF73XcnfGvaybJaLYdbpr7ul2q9GtRM",
    authDomain: "abes-5683c.firebaseapp.com",
    projectId: "abes-5683c",
    storageBucket: "abes-5683c.firebasestorage.app",
    messagingSenderId: "377967420367",
    appId: "1:377967420367:web:a0e0186cb379bcbf7628ba",
    measurementId: "G-BSZ4D03MGN",
    databaseURL: "https://abes-5683c-default-rtdb.firebaseio.com/",
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icons/icon-192x192.png", // Update this path if needed
    });
});