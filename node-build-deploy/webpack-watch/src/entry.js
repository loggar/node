require("!style-loader!css-loader!./style.css"); // npm dependency: css-loader style-loader
// or just 
// require("./style.css");
// with the script option
// webpack ./entry.js bundle.js --module-bind 'css=style-loader!css-loader'
document.write(require("./content.js"));