/**
    user - User name to use for authentication.
    password - Password to use for authentication.
    server - Server to connect to. You can use 'localhost\instance' to connect to named instance.
    port - Port to connect to (default: 1433). Don't set when connecting to named instance.
    domain - Once you set domain, driver will connect to SQL Server using domain login.
    database - Database to connect to (default: dependent on server configuration).
    connectionTimeout - Connection timeout in ms (default: 15000).
    requestTimeout - Request timeout in ms (default: 15000).
    stream - Stream recordsets/rows instead of returning them all at once as an argument of callback (default: false). You can also enable streaming for each request independently (request.stream = true). Always set to true if you plan to work with large amount of rows.
    parseJSON - Parse JSON recordsets to JS objects (default: false). For more information please see section JSON support.
    pool.max - The maximum number of connections there can be in the pool (default: 10).
    pool.min - The minimum of connections there can be in the pool (default: 0).
    pool.idleTimeoutMillis - The Number of milliseconds before closing an unused connection (default: 30000).
 */
module.exports = (function () {
    return {
        user: 'sa',
        password: 'xxxxxxxx',
        server: '127.0.0.1', // You can use 'localhost\\instance' to connect to named instance 
        database: 'DB_NAME',

        options: {
            // encrypt: true // Use this if you're on Windows Azure 
        },

        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        }
    }
})();
