const request = new sql.Request()
request.input('input_parameter', sql.Int, value)
request.output('output_parameter', sql.Int)
request.execute('procedure_name', (err, result) => {
    // ... error checks 
 
    console.log(result.recordsets.length) // count of recordsets returned by the procedure 
    console.log(result.recordsets[0].length) // count of rows contained in first recordset 
    console.log(result.recordset) // first recordset from result.recordsets 
    console.log(result.returnValue) // procedure return value 
    console.log(result.output) // key/value collection of output values 
    console.log(result.rowsAffected) // array of numbers, each number represents the number of rows affected by executed statemens 
 
    // ... 
})

/* Errors
EREQUEST (RequestError) - Message from SQL Server
ECANCEL (RequestError) - Cancelled.
ETIMEOUT (RequestError) - Request timeout.
ENOCONN (RequestError) - No connection is specified for that request.
ENOTOPEN (ConnectionError) - Connection not yet open.
ECONNCLOSED (ConnectionError) - Connection is closed.
ENOTBEGUN (TransactionError) - Transaction has not begun.
EABORT (TransactionError) - Transaction was aborted (by user or because of an error).
*/

/* JS Data Type To SQL Data Type Map
String -> sql.NVarChar
Number -> sql.Int
Boolean -> sql.Bit
Date -> sql.DateTime
Buffer -> sql.VarBinary
sql.Table -> sql.TVP
*/