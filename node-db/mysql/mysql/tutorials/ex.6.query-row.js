const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist',
  debug: false
});

// query rows in the table

function queryRow(userName) {
  let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';
  let query = mysql.format(selectQuery, ['todo', 'user', userName]);
  // query = SELECT * FROM `todo` where `user` = 'shahid'
  pool.query(query, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows fetch
    console.log(data);
  });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
  // call the function
  // select rows
  queryRow('shahid');
}, 5000);
