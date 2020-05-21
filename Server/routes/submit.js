var express = require('express');
var router = express.Router();
// use database
var sql = require('sqlite3');
var db = new sql.Database('serverData.db');
var result;
db.all("select * from candidate", show)

router.get('/', function(req, res, next) {
    db.all("select * from candidate", show);
    res.send(result)
})

function show(error, rows) {
    if (error) throw error;
    result = rows;
    //console.log(rows);
    //console.log(rows[0]);
    //console.log(rows[0].name);
}

module.exports = router;