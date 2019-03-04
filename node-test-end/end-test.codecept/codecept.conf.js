exports.config = {
  tests: './src-end-test.codecept/**/*.pageObject.test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'end-test.codecept'
}