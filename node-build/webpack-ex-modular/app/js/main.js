import $ from 'jquery';
import mathAPI from './math/operations.js';
$(document).ready(function () {
	$(".myButton").click(function () {
		var message = "5 + 3 = " + mathAPI.add(5, 3) + " 5 * 3 = " + mathAPI.multiply(5, 3)
		console.log(message);
	});
});