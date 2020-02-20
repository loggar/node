const fetch = require("node-fetch");

const start_prime_index = 1000000;
const end_prime_index = 1000015;

const executeId =
  "request primes " + start_prime_index + " ~ " + end_prime_index;
console.time(executeId);

const fetchPrimes = function(n) {
  console.log("request prime numbers " + n);
  fetch("http://localhost:28080/primes?n=" + n)
    .then(res => res.text())
    .then(body => {
      console.log("prime number ~" + n + ": " + body);
      if (n == end_prime_index) {
        console.timeEnd(executeId);
      }
    });
};

const main = function() {
  let prime_index = start_prime_index;

  const intervalId = setInterval(function() {
    if (prime_index <= end_prime_index) {
      fetchPrimes(prime_index++);
    } else {
      clearInterval(intervalId);
    }
  }, 500);

  // test on the server app.1.server.js
  // request primes 1000000 ~ 1000015: 228526.193ms
};

main();
