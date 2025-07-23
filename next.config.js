const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: false,
    // buildExcludes: [/firebase-messaging-sw\.js$/, /firebase-admin\.js$/], // prevent FCM sw from being overridden
});

module.exports = withPWA({
    reactStrictMode: true,
});