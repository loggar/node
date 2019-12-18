const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist',
  debug: false
});

function deleteRow(userName) {
  let deleteQuery = 'DELETE from ?? where ?? = ?';
  let query = mysql.format(deleteQuery, ['todo', 'user', userName]);
  // query = DELETE from `todo` where `user`='shahid';
  pool.query(query, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows deleted
    console.log(response.affectedRows);
  });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
  // call the function
  // delete row
  deleteRow('shahid');
}, 5000);
