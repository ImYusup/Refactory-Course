## Here's step to use basic node.js
- mkdir your path directory here
- write the command 'npm init' and you can see the 'package.json' inside.
- create new file index.js to make the routing and write the code here
``` javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Hello World</h2>\n');
  });


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
- create new file index.html to show html in localhost:3000
```html
<body>
    <button onclick="klik()">
        CLICK ME
    </button>
    <script>
        function klik() {
            alert("hello")
        }
    </script>
</body>
```
- create new file event.js to avoid many if-else in index.js
```javascript
const container = [];

function register(id, cb) {
    container.push({id, cb});
}

function emit(id) {
    var event = container.filter(event => event.id==id);
    event[0].cb()
}

register('/articles', function() {
    console.log("articles ======")
})

register('/comments', function() {
    console.log("comments")
});

emit('/articles')
emit('/comments')
```