// Require the core node modules.
var chalk = require("chalk");
var mysql = require("mysql"); // v2.11.1

// Define our connection to the MySQL database.
// --
// NOTE: In this demo, we are using a connection pool.
var pool = mysql.createPool({
	host: "127.0.0.1",
	user: "root",
	password: "admin",
	database: "elearning",

	connectionLimit: 2, // Default value is 10.
	waitForConnections: true, // Default value.
	queueLimit: 0 // Unlimited - default value.
});

// Connections, within the pool, are created in a lazy manner. When a connection is
// established, the connection event is fired. This does not happen each time a
// connection is obtained from the pool - only when the connection is first created.
pool.on(
	"connection",
	function hanldeEvent() {
		console.log(chalk.bgYellow.white("Pooled connection established."));
	}
);

// When we submit a query before a pooled connection is available, the driver will
// queue the query until a pooled connection becomes available.
pool.on(
	"enqueue",
	function hanldeEvent() {
		console.log(chalk.bgYellow.white("Waiting for connection slot."));
	}
);

// Run a few queries in parallel using the connection pool.
// --
// NOTE: We are initiated more queries than we have connections in the pool (Limit: 2).
for (var i = 0; i < 5; i++) {
	pool.query(
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

// Close the pooled connections to the database so the Node.js process can close.
// Otherwise, the process will remain open until the database kills the connections.
// --
// CAUTION: The .end() method, when using a connection pool, is NOT AS GRACEFUL as
// when using a single connection. Calling the .end() at this point will actually
// break the script because the preceding connections, required by the queries, have
// not yet been obtained.
pool.end();

/*
Waiting for connection slot.
Waiting for connection slot.
Waiting for connection slot.
Error:
{ Error: Pool is closed.
...
*/

/*
As you can see, none of the queries could be initiated because none of the connections in the connection pool could be established before the .end() method was called. So, while the .end() method on the connection pool is "graceful," it is only graceful at the connection level. Meaning, established connections will end gracefully, but queued connections will not.

To solve this problem, we ultimately created a simple Promise-based proxy to the underlying connection pool. This way, rather than calling .end() immediately, we could easily call .end() once all the queries had actually returned.

refer ./pool-connection-end.work.js
*/