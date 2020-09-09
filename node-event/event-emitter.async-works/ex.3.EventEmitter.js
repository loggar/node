import EventEmitter from "events";

// Just initiating new Event stack
const baseEvent = new EventEmitter();

const urls = [
  "url1",
  "url2",
  "url3",
  "url4",
  "url5",
  "url6",
  "url7",
  "url8",
  "url9",
];

const responses = [];

async function runTask({ url }) {
  const { data } = await axios(url);
  baseEvent.emit("response", { html: data });
}

baseEvent.on("request", runTask);

function handleResponse({ html }) {
  responses.push(html);

  if (responses.length === urls.length) {
    baseEvent.emit("end", responses);
  }
}

baseEvent.on("response", handleResponse);

function doSomething(responses) {
  // DO something with responses here
}

baseEvent.once("end", doSomething);

urls.map((url) => baseEvent.emit("request", { url }));
