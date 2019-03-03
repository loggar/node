const transaction = new sql.Transaction()
transaction.begin(err => {
    // ... error checks 
})

/* Errors
ENOTOPEN (ConnectionError) - Connection not yet open.
EALREADYBEGUN (TransactionError) - Transaction has already begun.
*/