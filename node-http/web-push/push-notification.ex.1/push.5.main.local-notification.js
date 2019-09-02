const check = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    throw new Error("No Push API Support!");
  }
};
const main = () => {
  check();
};

// service.js
// console.log('Hello from service worker')

// I added a function that can be used to register a service worker.
const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register("service.js"); //notice the file name
  return swRegistration;
};

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};

const showLocalNotification = (title, body, swRegistration) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/notification
  const options = {
    body
    // here you can add more properties like icon, image, vibrate, etc.
  };
  swRegistration.showNotification(title, options);
};

const main = async () => {
  check();
  const swRegistration = await registerServiceWorker();
  const permission = await requestNotificationPermission();
  showLocalNotification("This is title", "this is the message", swRegistration);
};

main();
