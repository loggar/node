var mysql = require('mysql');

var arr = [
  '11700706',
  '11701256',
  '11800035',
  '11800951',
  '11801460',
  '11801524',
  '11801739'
];

var arr2 = arr
  .map(function(item) {
    return "'" + item + "'";
  })
  .join(',');

var sql = `
UPDATE HS_TB_REQ_BLOCK_PRINT SET
    IT_FLAG = 'Y',
    IT_STAFF = 'T09000009'
WHERE CANCEL_FLAG = 'N'
AND REQ_TYPE = 'D'
AND TRIMESTER = (SELECT CODE_LV FROM HS_TB_COMMON_CODE WHERE CODE = 'CURRENT_TRIMESTER' AND DEL_FLAG = 'N')
AND STD_IDX IN (SELECT STD_IDX FROM HS_TB_STUDENT_INFO WHERE STD_ID IN (${arr2}) AND DEL_FLAG = 'N')
`;

var sql2 = mysql.format(sql, null);

console.log(sql2);

// result = await mysqlPool.getPool().query(sql, null);
