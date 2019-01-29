const transaction = new sql.Transaction()
transaction.begin(err => {
    // ... error checks 
 
    transaction.commit(err => {
        // ... error checks 
    })
})

/* Errors
ENOTBEGUN (TransactionError) - Transaction has not begun.
EREQINPROG (TransactionError) - Can't commit transaction. There is a request in progress.
*/
