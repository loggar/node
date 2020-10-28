var ejs = require('ejs');
var template = "<%= message %>";
var context = {
		message: "<script>console.log('XSS attack!');</script>"
};

var output = ejs.render(template, context);
console.log(output);
