var alasql = require("alasql");

alasql("CREATE TABLE test (language INT, hello STRING)");
alasql("INSERT INTO test VALUES (1, 'Hello!')");
alasql("INSERT INTO test VALUES (2, 'Aloha!')");
alasql("INSERT INTO test VALUES (3, 'Bonjour!')");

const results = alasql("SELECT * FROM test WHERE language > 1");
console.log(results);

// Output:
// [{ "language":2, "hello":"Aloha!" },{ "language":3,"hello":"Bonjour!" }]
