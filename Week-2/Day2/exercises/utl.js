## **Here's step how to show the results mysql in terminal**

### **1. Make sure you have .db and import, create, & select .db in your SQL.**

Import's and follow this step :
```terminal
//import sql
mysql -u root -p konekDatabases<db.sql
//show databases
mysql root@localhost:(none)> show DATABASES 
//use <ur databases here>
mysql root@localhost:(none)> use tugas2
````
### **2. Connection and Query to database.**
```javascript
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
    // You can create code use callback method here 
  }); 
   connection.end();
  
```

- Sample if your output is correct
```output
[ RowDataPacket {
    isbn: 1,
    title: 'React The Best',
    name: 'erdi',
    email: 'bla2@gmail.com' },
  RowDataPacket {
    isbn: 2,
    title: 'Dilan 1990',
    name: 'erdi',
    email: 'bla2@gmail.com' },
  RowDataPacket {
    isbn: 3,
    title: 'Vue The Best',
    name: 'erdi',
    email: 'bla2@gmail.com' },
  RowDataPacket {
    isbn: 3,
    title: 'Vue The Best',
    name: 'mulia nasution',
    email: 'mul14@email.com' } ]
```

## **Here's step how to show the results mysql in browser**

Use 'express' framework nodejs to connection between mySQL with browser 
```javascript
const express = require ('express');
const app = express();

//jalur koneksi ke localhost
app.listen(5000, function() {
  console.log('Server running in port 5000');
});
```
Noted : If your port is already exist! 

follow this steps in terminal
```terminal
yusup:exercises/ (master*) $ lsof -i :3000                                                                                        [14:15:41]
COMMAND   PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node    12859 yusup   11u  IPv6 305651      0t0  TCP *:3000 (LISTEN)

kill -9 12859  
```

### Callback Method Function
1. Create new function within parameter 
```javascript
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
```
2. Add coding express routing here
```javascript
//Callback function here
app.get('/callback', function (req, res) {
    loadData1(function(data1) {
      res.json(data1);
    });
})
```

### Promise Menthod Function
1. Add new function without parameter.

```javascript
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
```
2. Add code routing express here
```javascript
app.get('/promise', function (req, res) {
    loadData2().then(function(data2) {
      res.json(data2);
    });
})
```
### Asynch await Function  
1. This step must any promise function (calloboration) 

2. Add routing express here
```javascript
app.get('/async', async function (req, res){
   var data3 = await loadData3();
    console.log(data3);
    res.json(data3);
})
```
## **Here's step to additional connect index.html with javascript**

#### **1. Step's responding and routing in index.js** 
app middleware here
```javascript
//respond html here
app.use(express.static('public')); //middleware express
app.use(logMiddleware);

//call index.html here
app.get('/', function (req, res) {
       res.sendFile('index.html');
   })
```
#### **2. Step's create middleware log in index.js** 
- Create log-middleware and follow this code
```javascript
module.exports =  function logMiddleware(req, res, next) {
    console.log("fucking shit", new Date(), req.url);
    next();
}
```
- Add script code in index.js
```javascript
//Crete new var forlogmiddleware
var logMiddleware = require('./log-middleware');

//respond to logmiddleware
app.use(logMiddleware);
```