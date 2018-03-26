## How to use Node.js basic with package management (express)
- npm init to "enter to many times" automatically will show the package json inside (e.g : package-lock.json, package.json).
- copas source code http://expressjs.com/en/starter/hello-world.htmlhere and also additional more the code : 
```javascript
const express = require('express')
const app = express()

var data = [
    {
        id: 1, 
        title: "ini judul kesatu",
        img: "http://example.jpeg"
    },
    {
        id: 2, 
        title: "ini judul kedua",
        img: "http://example.jpeg"
    },
];

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/articles', function(req, res) {

    res.send(data)
})

app.get('/articles/:id', function(req, res) {
    var id = req.params.id;
    var article = data.filter(item => item.id==id)
    res.send(article[0])
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

- write the command 'npm i express' which it has function library modules (e.g : node_modules inside).




