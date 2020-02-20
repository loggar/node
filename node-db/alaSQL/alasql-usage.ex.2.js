var alasql = require("alasql");

const data = [
  { id: 1, amount: 10 },
  { id: 2, amount: 20 },
  { id: 1, amount: 30 }
];
const results = alasql("SELECT id, SUM(amount) AS total FROM ? GROUP BY id", [
  data
]);
console.log(results);

// Output:
// [{"id":1,"total":40},{"id":2,"total":20}]
