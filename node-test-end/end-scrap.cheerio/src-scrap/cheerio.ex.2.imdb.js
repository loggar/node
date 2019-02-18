const request = require('request');
const cheerio = require('cheerio');

function getFull(id, callback) {
  request.get(`https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1`, function(
    error,
    response,
    body
  ) {
    const $ = cheerio.load(body);
    callback(error, {
      story: $('div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)')
        .text()
        .trim(),

      genre: $('#titleStoryLine > div:nth-child(10)')
        .find('a')
        .text()
        .trim()
        .split(' '),

      poster:
        $('.poster >a:nth-child(1) >img:nth-child(1)')[0].attribs.src.split(
          '@._'
        )[0] + '@._V1_QL50.jpg',

      related: Array.from(
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
    });
  });
}

getFull('tt0437086', function(err, obj) {
  if (err) {
    console.log(err);
    return false;
  }

  console.log(obj.story);
  console.log(obj.genre);
  console.log(obj.poster);

  obj.related.forEach(function(item) {
    console.log(item);
  });
});

module.exports = { getFull };
