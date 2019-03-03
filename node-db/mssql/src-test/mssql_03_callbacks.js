const sql = require('mssql')
const config = require('./mssql__config')

sql.connect(config, err => {
    // ... error checks 

    // Query 

    new sql.Request().query('select 1 as number', (err, result) => {
        // ... error checks 

        console.dir(result)
    })

    // Stored Procedure 
    /*
       new sql.Request()
       .input('input_parameter', sql.Int, 1)
       .output('output_parameter', sql.VarChar(50))
       .execute('procedure_name', (err, result) => {
           // ... error checks 
    
           console.dir(result)
       })
    */
})

sql.on('error', err => {
    // ... error handler 
})