function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

isPushNotificationSupported();

// Register a service worker
function registerServiceWorker() {
  return navigator.serviceWorker.register("/sw.js");
}

// Ask the user permission
async function askUserPermission() {
  return await Notification.requestPermission();
}
