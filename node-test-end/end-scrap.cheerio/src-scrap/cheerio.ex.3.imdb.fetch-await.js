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

const scrapImdb = (function() {
  return {
    story: $ => {
      return $('div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)')
        .text()
        .trim();
    },

    genre: $ => {
      return $('#titleStoryLine > div:nth-child(10)')
        .find('a')
        .text()
        .trim()
        .split(' ');
    },

    poster: $ => {
      return (
        $('.poster >a:nth-child(1) >img:nth-child(1)')[0].attribs.src.split(
          '@._'
        )[0] + '@._V1_QL50.jpg'
      );
    },

    related: $ =>
      Array.from(
        $('.rec_poster').map(function(index, element) {
          const id = $(this)
            .find('a')[0]
            .attribs.href.split('/')[2];
          const _data = $(this).find('.rec_poster_img')[0].attribs;
          return {
            id,
            poster: _data.loadlate.trim(),
            name: _data.title.trim()
          };
        })
      )
  };
})();

(function() {
  scrapFullHtml('tt0437086').then(body => {
    const cheerio_dom = cheerio.load(body);

    console.log(scrapImdb.story(cheerio_dom));
    console.log(scrapImdb.genre(cheerio_dom));
    console.log(scrapImdb.poster(cheerio_dom));

    const relateds = scrapImdb.related(cheerio_dom);

    relateds.forEach(function(item) {
      console.log(item);
    });
  });
})();
