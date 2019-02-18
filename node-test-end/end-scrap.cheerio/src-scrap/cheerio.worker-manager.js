const workers = require('./cheerio.worker');

workers('tt2193021')
  .then(console.log)
  .catch(console.error);
