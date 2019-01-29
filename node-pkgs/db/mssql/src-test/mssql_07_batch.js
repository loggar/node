/* batch */
const request = new sql.Request()
request.batch('create procedure #temporary as select * from table', (err, result) => {
    // ... error checks 
})

/* bulk */
const table = new sql.Table('table_name') // or temporary table, e.g. #temptable 
table.create = true
table.columns.add('a', sql.Int, {nullable: true, primary: true})
table.columns.add('b', sql.VarChar(50), {nullable: false})
table.rows.add(777, 'test')
 
const request = new sql.Request()
request.bulk(table, (err, result) => {
    // ... error checks 
})

/* cancel */
const request = new sql.Request()
request.query('waitfor delay \'00:00:05\'; select 1 as number', (err, result) => {
    console.log(err instanceof sql.RequestError)  // true 
    console.log(err.message)                      // Cancelled. 
    console.log(err.code)                         // ECANCEL 
 
    // ... 
})
 
request.cancel()