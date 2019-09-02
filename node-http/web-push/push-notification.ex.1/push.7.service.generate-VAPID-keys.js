/*
  $ npm install -g web-push
  $ web-push generate-vapid-keys

  Public Key: BJ5IxJBWdeqFDJTvrZ4wNRu7UY2XigDXjgiUBYEYVXDudxhEs0ReOJRBcBHsPYgZ5dyV8VjyqzbQKS8V7bUAglk
  Private Key: ERIZmc5T5uWGeRxedxu92k3HnpVwy_RCnQfgek1x2Y4
*/

// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = base64String => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

self.addEventListener("activate", async () => {
  // This will be called only once when the service worker is activated.
  try {
    const applicationServerKey = urlB64ToUint8Array("BJ5IxJBWdeqFDJTvrZ4wNRu7UY2XigDXjgiUBYEYVXDudxhEs0ReOJRBcBHsPYgZ5dyV8VjyqzbQKS8V7bUAglk");
    const options = { applicationServerKey, userVisibleOnly: true };
    const subscription = await self.registration.pushManager.subscribe(options);
    console.log(JSON.stringify(subscription));
  } catch (err) {
    console.log("Error", err);
  }
});

// Now refresh and unregister/re-register the service worker. Click on “Ask Permission”. You should see in your console.
/*
  {
    "endpoint" : "https://fcm.googleapis.com/fcm/send/<some id>",
    "expirationTime" : null,
    "keys": {
      "p256dh" : "<some key>",
      "auth" : "<some key>"
    }
  }
*/
