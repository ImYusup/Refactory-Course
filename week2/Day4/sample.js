#!/usr/bin/env node

const prog = require('caporal');
prog
   .command('movies', 'give this command') 
   //.argument('[app...]', 'App to the command') //auto array
   .action(function(args) {
    
    const cheerio = require('cheerio');
    const request = require('request');

    const url1 = 'https://www.cgv.id/en/movies/now_playing';
  
    request(url1, (error, response, body) => {
        if (!error && response.statusCode === 200) {
        let $ = cheerio.load(body);
        $('.movie-list-body ul li a').each(function(i, element){ //3 times called
        let title = $(this).attr('href'); 
        //console.log(title);
        
        const url2 = `https://www.cgv.id/${title}` 
            request (url2, (error, response, body) => { 
            if (!error && response.statusCode === 200) {    
            let $ = cheerio.load(body);
            $('.synopsis-section').each(function(i, element){ 
            let judul = $(this).prev().text().trim(); 
            let detail = $(this).children().children().text().split('\t').filter(x => x!='');
            let synopsis = $(this).children().next().text().trim();
            console.log(judul);
            console.log(detail.join('\n'));
            console.log(synopsis);
            console.log('\n' + '='.repeat(105) + '\n')
            }) 
          }
        })
      })
    }
    else {
        console.error(error.message);
    }
        })
    })

prog.parse(process.argv);