async function main1() {
	// get the client
	const mysql = require('mysql2/promise');
	// create the connection
	const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'test' });
	// query database
	const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
}

/*
MySQL2 use default Promise object available in scope. But you can choose which Promise implementation you want to use
*/

// get the client
const mysql = require('mysql2/promise');

// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');

// create the connection, specify bluebird as Promise
const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'test', Promise: bluebird });

// query database
const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);


/*
MySQL2 also exposes a .promise() function on Pools, so you can create a promise/non-promise connections from the same pool
*/

async function main2() {
	// get the client
	const mysql = require('mysql2');
	// create the pool
	const pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'test' });
	// now get a Promise wrapped instance of that pool
	const promisePool = pool.promise();
	// query database using promises
	const [rows, fields] = await promisePool.query("SELECT 1");
}

/*
MySQL2 exposes a .promise() function on Connections, to "upgrade" an existing non-promise connection to use promise
*/

async function main3() {
	// get the client
	const mysql = require('mysql2');
	// create the connection
	mysql.createConnection(
		{ host: 'localhost', user: 'root', database: 'test' },
		(err, con) => {
			con.promise().query("SELECT 1")
				.then(([rows, fields]) => {
					console.log(rows);
				})
				.catch(console.log)
				.then(() => con.end());
		}
	);
}
