const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$('.title').text();
//=> Hello there!

/*
text: gives the text inside the element (text children of the tree).
html: inner HTML of the element.
find: find children of the element using CSS selector.
attribs : gives the attribute of the element.
*/
