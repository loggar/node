self.addEventListener("activate", async () => {
  // This will be called only once when the service worker is activated.
  try {
    const options = {};
    const subscription = await self.registration.pushManager.subscribe(options);
    console.log(JSON.stringify(subscription));
  } catch (err) {
    console.log("Error", err);
  }
});

// In Firefox console you should see:
/*
{
    "endpoint":"https://updates.push.services.mozilla.com:443/wpush/v1/<some_id>",
    "keys":{
      "auth":"<some key>",
      "p256dh":"<some key>"
    }
  }
*/

// In Chrome console you would see an error:
/*
  Error DOMException: Registration failed - missing
  applicationServerKey, and gcm_sender_id not found in manifest
*/
