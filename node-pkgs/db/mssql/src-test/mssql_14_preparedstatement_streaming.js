const ps = new sql.PreparedStatement()
ps.input('param', sql.Int)
ps.prepare('select @param as value', err => {
    // ... error checks 

    ps.stream = true
    const request = ps.execute({ param: 12345 })

    request.on('recordset', columns => {
        // Emitted once for each recordset in a query 
    })

    request.on('row', row => {
        // Emitted for each row in a recordset 
    })

    request.on('error', err => {
        // May be emitted multiple times 
    })

    request.on('done', result => {
        // Always emitted as the last one 

        console.log(result.rowsAffected) // Returns number of affected rows in case of INSERT, UPDATE or DELETE statement. 

        ps.unprepare(err => {
            // ... error checks 
        })
    })
})