const transaction = new sql.Transaction()
transaction.begin(err => {
    // ... error checks 
 
    transaction.rollback(err => {
        // ... error checks 
    })
})

/* Errors
ENOTBEGUN (TransactionError) - Transaction has not begun.
EREQINPROG (TransactionError) - Can't rollback transaction. There is a request in progress.
*/
