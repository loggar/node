const sql = require('mssql')
const config = require('./mssql__config')
 
sql.connect(config, err => {
    // ... error checks 
 
    const request = new sql.Request()
    request.stream = true // You can set streaming differently for each request 
    request.query('select * from hs_tb_staff_info') // or request.execute(procedure) 
 
    request.on('recordset', columns => {
        // Emitted once for each recordset in a query
        console.log('columns: ' + JSON.stringify(columns));
    })
 
    request.on('row', row => {
        // Emitted for each row in a recordset 
        console.log('row: ' + JSON.stringify(row));
    })
 
    request.on('error', err => {
        // May be emitted multiple times 
        console.dir('error: ' + err);
    })
 
    request.on('done', result => {
        // Always emitted as the last one 
        console.dir('done');
    })
})
 
sql.on('error', err => {
    // ... error handler 
    console.dir('error: ' + err);
})