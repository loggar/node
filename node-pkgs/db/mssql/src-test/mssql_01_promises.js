const sql = require('mssql');
const config = require('./mssql__config');

var value = "STD_STA_CRS_";

sql.connect(config).then(pool => {
    return pool.request().query(
        `select * from hs_tb_common_code where code like '${value}%'`
    )
}).then(result => {
    console.dir(result);
}).catch(err => {
    console.dir(err);
})

sql.on('error', err => {
    console.dir(err);
})