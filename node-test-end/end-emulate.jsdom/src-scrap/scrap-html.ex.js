const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function getData(url, selector, timeout) {
  const virtualConsole = new jsdom.VirtualConsole();
  virtualConsole.sendTo(console, { omitJSDOMErrors: true });
  const dom = await JSDOM.fromURL(url, {
    runScripts: 'dangerously',
    resources: 'usable',
    virtualConsole
  });
  const data = await new Promise((res, rej) => {
    const started = Date.now();
    const timer = setInterval(() => {
      const element = dom.window.document.querySelector(selector);
      if (element) {
        res(element.textContent);
        clearInterval(timer);
      } else if (Date.now() - started > timeout) {
        rej('Timed out');
        clearInterval(timer);
      }
    }, 100);
  });
  dom.window.close();
  return data;
}

const url = 'https://example.com/';
const selector = '.example';
getData(url, selector, 2000).then(result => console.log(result));
