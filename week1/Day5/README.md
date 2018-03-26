## Here's steps for upload folder
 - mkdir (whatever) ur path directory here
 - npm init
 - npm i express
 - install : npm install csv-parse multer nedb nodemon   
 - change package.json here : 
   ```javascript 
    "start": "nodemon ./bin/www"
   ``` 
 - start that NPM and write the command : npm start
 - check the browser : 
    ```http
    localhttp://localhost:3000/
    ```
- install postman to linux 
```terminal
1. wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
2. sudo tar -xzf postman.tar.gz -C /opt
3. rm postman.tar.gz
4. sudo ln -s /opt/Postman/Postman /usr/bin/postman
```
- change the method to 'post' in postman 
- add the code here in indeks.js (routes folder)
```javascript
var fs = require ('fs');
var multer = require ('multer');
var datastore = require ('nedb'); //no sql
var upload = multer ({dest:'upload/'});

router.post('/csv',upload.single('myfile'), function(req,res,next)
{
  let file = req.file
  res.json({file})
})
```
- create file .csv and then upload the file by postman (dont forget to change 'key' to synch with key in indek.js )
- add code global to index.js (routes folder)
```javascript
var csv = require('csv-parse');
```
- add function and code here 
```javascript
fs.createReadStream(file.path).pipe(csv()).on('data', function (data) {
    res.json({data})
  })
```

## Here's steps for store folder
- add folder and file 'data.txt' (change 'get' method from postman send)
- add new var global in indeks.js (routes folder)
```javascript
var db = new datastore({filename: 'store/data.txt', autoload:true})
```
- add code looping for ES6 in indeks.js (routes folder) : 
```javascript
//ES6 untuk looping 
    data.map ((x) => {
      db.insert({nama:x}, function (err, newDocs) {
      })
    });
```
- add code to get the data in indeks.js (routes folder)
``` javascript
//mengambil data  
router.get('/list', function(req, res, next) {
  db.find ({}, function (err, docs) {
    res.json({data:docs})
  });
})
```
- add code to show the data in indeks.js (routes folder)
``` javascript
router.get('/tampil', function(req, res, next) {
  res.render('tampil', { title: 'Tampil' });
})
```
- add file 'kode.js' in javascript folder which it will to show the results and write this code 
```javascript
$.get ({
    url: 'http://localhost:3000/list'
})
    .then((data)=>{
        data.map (x => {
          $('ul').append($('<li>').text(x.nama))
        })
        console.log(data)
    })
    .catch(err=>{
       alert('error bro!') 
    })
```
- add 'tampil.pug' file (views folders) and then add this code
```javascript
block content
  h1= title
  p Welcome to #{title} #{tampil}
  ul(id='list')

block script
  script(src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js")
  script(src='/javascripts/kode.js')
```
- add code to show view html in layout.pug (views folder)
```javascript
     block script
```

