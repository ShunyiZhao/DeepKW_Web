var express = require('express')
var router = express.Router();

router.get('/', function(req, res, next) {
    var data = 100;
    res.json(data);
})

module.exports = router;