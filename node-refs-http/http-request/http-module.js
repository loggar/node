var http = require("http");

var options_post = {
	host: "developer.api.autodesk.com",
	path: "/oss/v1/buckets",
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Authorization": "Bearer token"
	}
};

var req = http.request(options_post, function (res) {
	var responseString = "";

	res.on("data", function (data) {
		responseString += data;
		// save all the data from response
	});
	res.on("end", function () {
		console.log(responseString);
		// print to console when response ends
	});
});

// req.write(); or with request body
var reqBody = "request body";
req.write(reqBody);
req.end();




// ex2 PUT

var bucket = {};
bucket.name = "shiyas-bucket";

var file = {};
file.name = "sometext.txt";

var options_put = {
	host: "developer.api.autodesk.com",
	path: "/oss/v1/buckets/" + bucket.name + "/objects/" + file.name,
	method: "PUT",
	headers: {
		"Content-Type": "application/octet-stream",
		"Authorization": "Bearer token"
	}
};

var req2 = http.request(options_post, function (res) {
	var responseString = "";

	res.on("data", function (data) {
		responseString += data;
		// save all the data from response
	});
	res.on("end", function () {
		console.log(responseString);
		// print to console when response ends
	});
});

// req2.write(); or with request body
var reqBody = "request body";
req2.write(reqBody);
req2.end();
