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