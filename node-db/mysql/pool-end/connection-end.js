// Require the core node modules.
var chalk = require("chalk");
var mysql = require("mysql"); // v2.11.1

// Define our connection to the MySQL database.
// --
// NOTE: In this demo, we are using a single connection.
var connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "admin",
	database: "elearning"
});

// When we submit a query before a connection is available, the driver will queue the
// query until the connection becomes available.
connection.on(
	"enqueue",
	function hanldeEvent() {
		console.log(chalk.bgYellow.white("Waiting for connection slot."));
	}
);

// Run a few queries in serial. Since there is only one connection (we are not pooling),
// some of these queries will be enqueued before they are sent to the server.
for (var i = 0; i < 5; i++) {

	connection.query(
		`
			SELECT
				COUNT( * ) AS tutorCount
			FROM
				tutors
		`,
		function handleResponse(error, records, fields) {
			if (error) {
				console.log(chalk.bgRed.white("Error:"));
				console.log(error);
				return;

			}

			console.log(chalk.bgGreen.white("Count:", records[0].tutorCount));
		}
	);

} // END: For loop.

// Close the connection to the database so the Node.js process can close. Otherwise,
// the process will remain open until the database kills the connection.
// --
// NOTE: The .end() is a graceful operation on the connection - it will flush any
// queued queries before it sends the quit command to the MySQL server.
connection.end();

/*
Waiting for connection slot.
Waiting for connection slot.
Waiting for connection slot.
Waiting for connection slot.
Waiting for connection slot.
Waiting for connection slot.
Waiting for connection slot.
Count: 2
Count: 2
Count: 2
Count: 2
Count: 2
*/