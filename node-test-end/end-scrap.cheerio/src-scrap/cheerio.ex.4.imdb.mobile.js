const request = require('request');
const cheerio = require('cheerio');

function getCast(id, n, callback) {
  request(
    `https://m.imdb.com/title/${id}/fullcredits/cast?ref_=m_ttfc_3`,
    (error, response, data) => {
      const $ = cheerio.load(data);
      let cast = [];
      let i = 0;
      while (i < n) {
        try {
          cast.push({
            name: $(`h4`)
              .slice(i, i + 1)
              .text(),
            image:
              $('.media-object')[i + 1].attribs.src.split('@._')[0] +
              '@._V1_QL50.jpg',
            role: $('.h4')
              .slice(i + 1, i + 2)
              .text()
              .split('\n')
              .join('')
          });
          i++;
        } catch (e) {
          i++;
        }
      }
      // console.log(cast)
      callback(null, { cast });
    }
  );
}

getCast('tt0437086', 10, function(err, obj) {
  if (err) {
    console.log(err);
    return false;
  }

  obj.cast.forEach(function(item) {
    console.log(item);
  });
});
