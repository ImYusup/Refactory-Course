var express = require('express');
var router = express.Router();
var fs = require ('fs');
var csv = require('csv-parse');
var multer = require ('multer');
var datastore = require ('nedb'); //no sql
var upload = multer ({dest:'upload/'});

//path to function get in postman
var db = new datastore({filename: 'store/data.txt', autoload:true})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/csv',upload.single('myfile'), function(req,res,next)
{
  let file = req.file
  fs.createReadStream(file.path).pipe(csv()).on('data', function (data) {
    
    //ES6 untuk looping 
    data.map ((x) => {
      db.insert({nama:x}, function (err, newDocs) {
      })
    });
    
    res.json({data}) //reponse here
  })
})

//mengambil data  
router.get('/list', function(req, res, next) {
  db.find ({}, function (err, docs) {
    res.json(docs)
  });
})

//menampilkan data untuk view
router.get('/tampil', function(req, res, next) {
  res.render('tampil', { title: 'Tampil' });
})


module.exports = router;