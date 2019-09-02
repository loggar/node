const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const webpush = require("web-push");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 4000;
app.get("/", (req, res) => res.send("Hello World!"));
const dummyDb = { subscription: null }; //dummy in memory store
const saveToDatabase = async subscription => {
  // Since this is a demo app, I am going to save this in a dummy in memory store. Do not do this in your apps.
  // Here you should be writing your db logic to save it.
  dummyDb.subscription = subscription;
};
// The new /save-subscription endpoint
app.post("/save-subscription", async (req, res) => {
  const subscription = req.body;
  await saveToDatabase(subscription); //Method to save the subscription to Database
  res.json({ message: "success" });
});
const vapidKeys = {
  publicKey: "BJ5IxJBWdeqFDJTvrZ4wNRu7UY2XigDXjgiUBYEYVXDudxhEs0ReOJRBcBHsPYgZ5dyV8VjyqzbQKS8V7bUAglk",
  privateKey: "ERIZmc5T5uWGeRxedxu92k3HnpVwy_RCnQfgek1x2Y4"
};
//setting our previously generated VAPID keys
webpush.setVapidDetails("mailto:myuserid@email.com", vapidKeys.publicKey, vapidKeys.privateKey);
//function to send the notification to the subscribed device
const sendNotification = (subscription, dataToSend) => {
  webpush.sendNotification(subscription, dataToSend);
};
//route to test send notification
app.get("/send-notification", (req, res) => {
  const subscription = dummyDb.subscription; //get subscription from your databse here.
  const message = "Hello World";
  sendNotification(subscription, message);
  res.json({ message: "message sent" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Let’s open up http://127.0.0.1:8080 in the browser

// Make sure you start from clean slate. Unregister service workers, clear up cache, etc.
// Now hit ask permission and you should see a console message success. Which means our push subscription has been saved in backend.

// Now open up the backend route http://localhost:4000/send-notification in another tab in your browser (since it is a GET API).
// You should see hello world push message on the console of the frontend app.