const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist',
  debug: false
});

function callSP(spName) {
  let spQuery = 'CALL ??';
  let query = mysql.format(spQuery, [spName]);
  // CALL `getAllTodo`
  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows from SP
    console.log(result);
  });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
  // call the function
  // call sp
  callSP('getAllTodo');
}, 5000);
