const ipc = require("node-ipc");

ipc.config.id = "a-unique-process-name2";
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.connectTo("a-unique-process-name1", () => {
  ipc.of["jest-observer"].on("connect", () => {
    ipc.of["jest-observer"].emit(
      "a-unique-message-name",
      "The message we send"
    );
  });
});
