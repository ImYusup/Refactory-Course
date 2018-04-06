// let myList = document.getElementById("myList");
// let myLi = document.createElement("li");
// var data = [];
// function tampilList(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => data=json );
//     console.log(data);
// }
// tampilList();

$.get("https://jsonplaceholder.typicode.com/photos",function(data){
            data.map(function(item){
                var title = document.createElement("a");
                var ls = document.createElement("li");
                var article = document.getElementById("myList");
                title.innerHTML = item.title;
                title.onclick = function(){
                    title.setAttribute("href","item.html?item="+item.id);
                };
                ls.appendChild(title);
                article.appendChild(ls);
            });
            
});
