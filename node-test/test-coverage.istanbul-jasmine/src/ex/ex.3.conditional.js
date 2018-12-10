module.exports = {
	doSomething: function (y) {
		var x = y || {};  // assign x as y or an empty object
		return x.val;
	}
}