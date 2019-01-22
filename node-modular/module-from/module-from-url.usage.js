const moduleFromUrl = require(".").moduleFromUrl;

(async function() {
  const _ = await moduleFromUrl(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"
  );
  console.log(typeof _.assign);
  console.log(typeof _);
})();

let _2;
moduleFromUrl(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"
).then(m => {
  _2 = m;
  console.log(typeof _2.assign);
});
