var mysql = require('mysql');
var logMiddleware = require('./log-middleware');

// callback connection here! 
function loadData1 (db) {
  //connection database here
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wismajaya',
    database: 'konekDatabases'
  });

   let data1 = [];
  //proven connection db
  connection.connect();
  //query connection sql here depend output
  connection.query(`SELECT book.isbn,book.title,author.name,author.email FROM book LEFT JOIN author_book ON book.isbn=author_book.isbn LEFT JOIN author ON author_book.author_id=author.author_id`,function(error,results,fields){
    //conditional if error here
    if (error) {
    console.error('koneksi error! ' + error.stack);
    return;
    }

    results;
    // console.log(results);
    db(results); 
  }); 
   connection.end();
  
}

//promise connection here
function loadData2 () {
  //connection database here
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wismajaya',
    database: 'konekDatabases'
  });

   var data2 = [];

  return new Promise(function(resolve, reject) {
    connection.connect();
  //query connection sql here depend output
    connection.query(`SELECT book.isbn,book.title,author.name,author.email FROM book LEFT JOIN author_book ON book.isbn=author_book.isbn LEFT JOIN author ON author_book.author_id=author.author_id`,function(error,results,fields){
    //conditional if error here
    if (error) {
    console.error('koneksi error! ' + error.stack);
    return;
    }
  //conditional promise here  
    if (typeof results == 'undefined') {
      reject('data kosong')
     } else {
      resolve(results)
    }
    });

  connection.end();
  })
}

// Async await here
function loadData3 () {
//connection database here  
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wismajaya',
    database: 'konekDatabases'
  });

   let data3 = [];
   return new Promise(function(resolve, reject) {
    connection.connect();
  //query connection sql here depend output
    connection.query(`SELECT book.isbn,book.title,author.name,author.email FROM book LEFT JOIN author_book ON book.isbn=author_book.isbn LEFT JOIN author ON author_book.author_id=author.author_id`,function(error,results,fields){
    //conditional if error here
    if (error) {
    console.error('koneksi error! ' + error.stack);
    return;
    }
  //conditional promise here  
    if (typeof results == 'undefined') {
      reject('data kosong')
     } 
     else {
      resolve(results)
    }
    });
   connection.end();
  });
}

//using express
const express = require ('express');
const app = express();

//mengambil .js (this routing function)

//respond html here
app.use(express.static('public')); //middleware express
app.use(logMiddleware);

//call index.html here
app.get('/', function (req, res) {
       res.sendFile('index.html');
   })

//Callback function here
app.get('/callback', function (req, res) {
    loadData1(function(data1) {
      res.json(data1);
    });
})

//Promise function here
app.get('/promise', function (req, res) {
    loadData2().then(function(data2) {
      res.json(data2);
    });
})

//Async function here
app.get('/async', async function (req, res){
   var data3 = await loadData3();
    console.log(data3);
    res.json(data3);
})

// jalur koneksi ke localhost
app.listen(3000, function() {
  console.log('Server running in port 3000');
});
