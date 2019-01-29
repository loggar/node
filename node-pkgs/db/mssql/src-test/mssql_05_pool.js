const sql = require('mssql')
const config = require('./mssql__config')
 
const pool1 = new sql.ConnectionPool(config, err => {
    // ... error checks 
 
    // Query 
 
    pool1.request() // or: new sql.Request(pool1) 
    .query('select 1 as number', (err, result) => {
        // ... error checks 
 
        console.dir(result)
    })
 
})
 
pool1.on('error', err => {
    // ... error handler 
    console.dir(err)
})

const pool2 = new sql.ConnectionPool(config, err => {
    // ... error checks 
 
    // Query 
 
    pool1.request() // or: new sql.Request(pool2) 
    .query('select 2 as number', (err, result) => {
        // ... error checks 
 
        console.dir(result)
    })
 
})

pool2.on('error', err => {
    // ... error handler 
    console.dir(err)
})


/* ES6 Tagged template literals */

new sql.ConnectionPool(config).connect().then(pool => {
    return pool.query`select 3 as number`
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
    console.dir(err)
})