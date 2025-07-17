self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    const data = event.data.json(); // Assuming your payload is JSON

    const title = data.notification.title || 'Default Title';
    const options = {
        body: data.notification.body || 'Default Body',
        icon: data.notification.icon || '/firebase-logo.png', // Or an appropriate icon
        // Add other options like badge, image, data, actions
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function (event) {
    console.log('[Service Worker] Notification click Received.');
    event.notification.close();

    // Optionally open a new window or focus an existing one
    event.waitUntil(
        clients.openWindow('https://pushnotification-ten.vercel.app/')
    );
});