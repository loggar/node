var ejs = require('ejs');
var template = "<%= message %>";
var context = {
		message: "abc"
};

var cache = process.env.NODE_ENV === 'production';
context.cache = cache;
context.filename = "uniqueIdentifiyWhicheverTemplateCached";

var output = ejs.render(template, context);
console.log(output);