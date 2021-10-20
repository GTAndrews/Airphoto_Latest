let pullTable = require('./actions/pullTable.js');
var express = require('express');
var app = express();

app.get('/', async (req, res, next) => {
  try {
    const result = await pullTable.pullTable();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

app.listen(5000, () => {console.log('Server is running..')});

/* var sql = require("mssql");

var config = {
  user: 'downloader',
  password: 'password',
  server: 'MERCATOR\\SQLEXPRESS2014,45000',
  database: 'AirphotoStats'
};

sql.connect(config, function (err) {
  if (err) console.log(err);

  var request = new sql.Request();

  request.query('query', function (err, recordset) {
    if (err) console.log(err)

    res.send(recordset);
  });
}); */