// ... app initialization
const DiContainer = require("./DiContainer");

const diContainer = new DiContainer();
diContainer.register("dbName", "myDb");
diContainer.factory("movieSuggestion", require("./model/ms"));
diContainer.factory("db", require("./utils/db"));
diContainer.factory("bot", require("./model/bot/ms"));
diContainer.factory("movieController", require("./model/controller/ms"));

const controller = diContainer.get("movieController");

console.log(controller);

// ... server starts listening
