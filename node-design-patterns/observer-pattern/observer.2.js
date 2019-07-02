class Observable {
  constructor() {
    this.observers = {};
  }

  on(input, observer) {
    if (!this.observers[input]) this.observers[input] = [];
    this.observers[input].push(observer);
  }

  triggerInput(input, params) {
    this.observers[input].forEach(o => {
      o.apply(null, params);
    });
  }
}

class Server extends Observable {
  constructor() {
    super();
  }

  triggerError() {
    let errorObj = {
      errorCode: 500,
      message: "Port already in use"
    };
    this.triggerInput("error", [errorObj]);
  }
}

const server = new Server();

server.on("error", err => {
  console.log("Error:: ", err);
});
