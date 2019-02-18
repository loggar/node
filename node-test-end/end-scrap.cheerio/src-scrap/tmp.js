const fetch = require('node-fetch');
const cheerio = require('cheerio');

const scrapFullHtml = async id => {
  try {
    const response = await fetch(
      `https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1`
    );
    const body = await response.text();
    return body;
  } catch (error) {
    console.log(error);
    return '';
  }
};

scrapFullHtml('tt0437086').then(body => {
  const $ = cheerio.load(body);
  console.log($);
  console.log($('div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)').text().trim());
});
