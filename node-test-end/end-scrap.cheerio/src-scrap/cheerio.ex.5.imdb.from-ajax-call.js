const request = require('request');
const cheerio = require('cheerio');

function getEpisode(id, season, callback) {
  request(
    `https://www.imdb.com/title/${id}/episodes/_ajax?season=${season}`,
    function(error, response, data) {
      const episodes = [];
      const $ = cheerio.load(data);
      $('.eplist > .list_item').each(function(i) {
        const story = $(
          `.eplist > div:nth-child(${i + 1}) > .info > .item_description`
        )
          .text()
          .trim();
        const posterElement = $(
          `div.list_item:nth-child(${i +
            1}) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > img:nth-child(1)`
        )[0];
        episodes.push({
          poster: posterElement
            ? posterElement.attribs.src.split('@._')[0] + '@._V1_QL50.jpg'
            : null,
          name: $(
            `.eplist > div:nth-child(${i + 1}) > div.info > strong > a`
          ).text(),
          story: story.includes('about?') ? 'N/A' : story,
          airDate: $(`.eplist > div:nth-child(${i + 1}) > .info > .airdate`)
            .text()
            .trim(),
          rating: $(
            `.eplist > div:nth-child(${i +
              1}) > .info > .ipl-rating-widget > .ipl-rating-star > .ipl-rating-star__rating`
          )
            .text()
            .trim()
        });
      });
      callback(error, episodes);
    }
  );
}

getEpisode('tt5491994', 2, function(err, episodes) {
  if (err) {
    console.log(err);
    return false;
  }

  episodes.forEach(function(item) {
    console.log(item);
  });
});
