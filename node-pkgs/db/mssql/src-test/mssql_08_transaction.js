const transaction = new sql.Transaction(/* [pool] */)
transaction.begin(err => {
    // ... error checks 
 
    const request = new sql.Request(transaction)
    request.query('insert into mytable (mycolumn) values (12345)', (err, result) => {
        // ... error checks 
 
        transaction.commit(err => {
            // ... error checks 
 
            console.log("Transaction committed.")
        })
    })
})