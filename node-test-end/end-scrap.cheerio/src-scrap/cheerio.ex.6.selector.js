const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'https://example.com/';
const selector = '.example';

fetch(url)
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    const data = $(selector);
    console.log(data.text());
  });
