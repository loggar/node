var TurndownService = require('turndown')
var turndownService = new TurndownService()

var markdown = turndownService.turndown('<h1>Hello world!</h1>')
// var markdown = turndownService.turndown(document.getElementById('content'))

console.log(markdown)
