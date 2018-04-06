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