var path = require('path');

console.log(path);

var dir = path.dirname(__filename);
console.log(dir);

var root = path.normalize(dir + "/../..");
console.log(root);

var root2 = path.resolve(dir, "../../abc.txt");
console.log(root2);

var dirs = __dirname.split(path.sep);
console.log(dirs);
console.log(dirs[dirs.length - 1]);
