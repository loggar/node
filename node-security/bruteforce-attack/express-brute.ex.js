/* 
Bruteforce Attack Prevention

Bruteforce is an attack where a hacker uses software to try different passwords repetitively until access is granted i.e valid password is found. To prevent a Bruteforce attack, one of the simplest ways is to wait it out approach. When someone is trying to login into your system and tried an invalid password more than 3 times, make them wait for 60 seconds or so before trying again. This way the attacker is going to be slow and it's gonna take them forever to crack a password.

Another approach to preventing it is to ban the IP that is generating invalid login requests. Your system allows 3 wrong attempts per IP in 24 hours. If someone tries to do brute-forcing then block the IP for 24 hours. This rate-limiting approach is been used by lots of companies to prevent brute-force attacks. If you are using the Express framework, there is a middleware module to enable rate-limiting in incoming requests. Its called express=brute.
*/

// npm install express-brute --save

const ExpressBrute = require("express-brute");
const store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
const bruteforce = new ExpressBrute(store);

app.post(
  "/auth",
  bruteforce.prevent, // error 429 if we hit this route too often
  function (req, res, next) {
    res.send("Success!");
  }
);
//...
