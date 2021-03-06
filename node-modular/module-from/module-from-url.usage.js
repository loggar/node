const moduleFromUrl = require('.').moduleFromUrl;

(async function() {
  const _ = await moduleFromUrl(
    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js'
  );
  console.log(typeof _.assign === 'function');
  console.log(typeof _ === 'function');
})();

moduleFromUrl(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js'
)
  .then(m => {
    let _2 = m;
    console.log(typeof _2.assign === 'function');
  })
  .catch(err => {
    throw new Error('FailToImportModuleFromUrl. ' + err.message);
  });
