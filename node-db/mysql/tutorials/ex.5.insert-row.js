const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist',
  debug: false
});

// add rows in the table

function addRow(data) {
  let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
  let query = mysql.format(insertQuery, [
    'todo',
    'user',
    'notes',
    data.user,
    data.value
  ]);
  pool.query(query, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows added
    console.log(response.insertId);
  });
}

function addRows(data) {
  let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
  let values = [['shahid', 'hello'], ['Rohit', 'Hi']]; // each array is one row
  let query = mysql.format(insertQuery, ['todo', 'user', 'notes', values]);
  pool.query(query, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows added
    console.log(response.insertId);
  });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
  // call the function
  addRow({
    user: 'Shahid',
    value: 'Just adding a note'
  });
}, 5000);
