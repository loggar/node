module.exports = (function() {
	var sqrt = Math.sqrt;
	var square = function(x) {
		return x * x;
	}
	
	return {
		square : square,
		diag : function(x, y) {
			return sqrt(square(x) + square(y));
		}
	};
})();