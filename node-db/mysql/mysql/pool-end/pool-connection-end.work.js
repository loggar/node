// Require the core node modules.
var chalk = require("chalk");
var mysql = require("mysql"); // v2.11.1
var Q = require("q"); // v2.11.1

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


// Let's create a simple database API that exposes a promise-based query method. This
// way, we can wait for responses to come back before we teardown the connection pool.
var db = {
	query: function (sql, params) {
		var deferred = Q.defer();
		// CAUTION: When using the node-resolver, the records and fields get passed into
		// the resolution handler as an array.
		pool.query(sql, params, deferred.makeNodeResolver());
		return (deferred.promise);
	}
};


// Run a few queries in parallel using the connection pool.
// --
// NOTE: We are initiated more queries than we have connections in the pool (Limit: 2).
var promises = [0, 1, 2, 3, 4].map(
	function iterator() {

		var promise = db
			.query(
				`
					SELECT
						COUNT( * ) AS tutorCount
					FROM
						tutors
				`,
		)
			.then(
				function handleResponse(results) {
					console.log(chalk.bgGreen.white("Count:", results[0][0].tutorCount));
				},
				function handleError(error) {
					console.log(chalk.bgRed.white("Error:"));
					console.log(error);
					return (Q.reject(error));
				}
			)
			;
		return (promise);
	}
); // END: Map loop.

// When all the queries have completed, close the pooled connections to the database
// so the Node.js process can close. Otherwise, the process will remain open until the
// database kills the connections.
Q
	.allSettled(promises)
	.then(
		function handleSettled(snapshots) {
			pool.end();
		}
	)
	;

/*
Waiting for connection slot.
Waiting for connection slot.
Waiting for connection slot.
Pooled connection established.
Pooled connection established.
Count: 2
Count: 2
Count: 2
Count: 2
Count: 2
*/