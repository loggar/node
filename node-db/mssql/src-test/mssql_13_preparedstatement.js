const ps = new sql.PreparedStatement()
ps.input('param', sql.Int)
ps.prepare('select @param as value', err => {
    // ... error checks 

    ps.execute({ param: 12345 }, (err, result) => {
        // ... error checks 

        console.log(result.recordset[0].value) // return 12345 
        console.log(result.rowsAffected) // Returns number of affected rows in case of INSERT, UPDATE or DELETE statement. 

        ps.unprepare(err => {
            // ... error checks 
        })
    })
})