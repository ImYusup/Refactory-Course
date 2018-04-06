#!/usr/bin/env node

const prog = require('caporal');

//console.log('#1 String Transformation')
//lowercase function here
function lowercase (str) {
    return str.toLowerCase();
}
//lowercase function here
function uppercase (str) {
    return str.toUpperCase();
}
//capitalize function here
function capitalize (str) {
//split space
str += ' '
let simpan = [];
let hasil = ''
  
 for (let i=0; i< str.length; i++) { 
    if (str[i] === ' ') {
    simpan.push(hasil);
    hasil = ''
    }
    else {
    hasil += str[i];
    }
 }
    //console.log(simpan);
    //ubah all array to lowercase
 let ubah = [];
  for (let j=0; j< simpan.length; j++) {
    ubah.push(simpan[j].toLowerCase());
  }
    //result to huruf awal jadi capitalize
 let results = [];
  for (let j=0; j< ubah.length; j++) {
    results.push(ubah[j][0].toUpperCase() + ubah[j].slice(1));
  }
    //results   
 return results.join(' ').toString();

//Other way use map looping
//     let arr = str.toLowerCase().split(' ')
      
//     let convert = arr.map(function (items) {
//         let hasil = '';
//         let awal = items[0].toUpperCase()
//         let sisa = items.slice(1)
//         hasil += awal + sisa;
//         return hasil;
//    })
//     return convert.join(' ').toString();    
}

//1. caporal lowercase here
prog
  .command('lowercase', 'give this command')
  .argument('<app>', 'App to the command')
  .action(function(args) {
    let a = args.app;
    console.log('Output '+lowercase(a));
})
//2. caporal uppercase here
prog
   .command('uppercase', 'give this command')
   .argument('<app>', 'App to the command')
   .action(function(args) {
   let b = args.app;
   console.log('Output '+uppercase(b));
})
//3. caporal capitalize here
prog
   .command('capitalize', 'give this command')
   .argument('<app>', 'App to the command') //auto string
   .action(function(args) {
   let c = args.app;
   console.log('Output '+capitalize(c));
})

//console.log('#2 Arithmetic')
//1. add function here
function added (num) {
  //cara looping
  let total = 0;
  for (let i=0; i< num.length; i++) {
    total += parseInt(num[i]);
  }
  return total;
}
//2. subtract function here
function subtract (num) {
  //cara looping
  let num1 = num[0];
  for (let i=1; i< num.length; i++) {
    num1 -= num[i];
  }
  return num1;
}
//3. multiply function here
function multiply (num) {
  let total = 1;
  for (let i=0; i< num.length; i++) {
    total *= num[i]
  }  
  return total;
}
//3. divide function here
function divide (num) {
  let num1 = num[0];
  for (let i=1; i< num.length; i++) {
    num1 /= num[i]
  }  
  return num1;
}

//1. caporal added here
prog
   .command('add', 'give this command')
   .argument('[app...]', 'App to the command') //auto array
   .action(function(args) {
   let a = args['app'];
   console.log('Output '+added(a));
})
//2. caporal subtract here
prog
  .command('subtract', 'give this command')
  .argument('[app...]', 'App to the command') //auto array
  .action(function(args) {
  let b = args['app'];
  console.log('Output '+subtract(b));
})
//3. caporal multiply here
prog
  .command('multiply', 'give this command')
  .argument('[app...]', 'App to the command') //auto array
  .action(function(args) {
  let c = args['app'];
  console.log('Output '+multiply(c));
})
//4. caporal divide here
prog
  .command('divide', 'give this command')
  .argument('[app...]', 'App to the command') //auto array
  .action(function(args) {
  let d = args['app'];
  console.log('Output '+divide(d));
})

//console.log('#3 Palindrome')
function palindrome (str) {
  let hasil = ''
  for (let i=str.length-1; i>=0; i--){
      hasil += str[i]
  }
  if (hasil.toLowerCase() === str.toLowerCase()) {
    return 'Yes'
  }
  else {
    return 'No'
  }
}
//1. caporal palindrome here
prog
  .command('palindrome', 'give this command')
  .argument('<app>', 'App to the command') //auto string
  .action(function(args) {
  let a = args.app;
  console.log('String: ' +a)
  console.log('Is palindrome? '+palindrome(a));
})

//console.log('#4 Obfuscator')
function obfuscator (str) {
    let hasil = ''
    for (let i=0; i< str.length; i++) {
      hasil += '&#' +str[i].charCodeAt() + ';'
    }
    return hasil;
} 
//1. caporal obfuscator here
prog
  .command('obfuscate', 'give this command')
  .argument('<app>', 'App to the command') //auto string
  .action(function(args) {
  let a = args.app;
  console.log(obfuscator(a));
})

//console.log('#5 Random String')
function randomStr (str) {
  
  let hasil = '';
  let library = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for (let i=0; i< 32; i++) {
    hasil += library.charAt(Math.floor(Math.random() * library.length));
  }
  return hasil;
}
//1. caporal random here
prog
  .command('random', 'give this command')
  //.argument('<app>', 'App to the command') //auto string
  .option('--length', 'Tail <lines> lines of logs after deploy', prog.INT)
  .option('--letters','Tail <lines> lines of logs after deploy', prog.BOOL)
  .option('--numbers','Tail <lines> lines of logs after deploy', prog.BOOL)
  .option('--uppercase','Tail <lines> lines of logs after deploy', prog.BOOL)
  .option('--lowercase','Tail <lines> lines of logs after deploy', prog.BOOL)
  .action(function(args, options, logger) {
  let a = args;
  let b = options.length;
  let c = options.letters;
  let d = options.numbers;
  let e = options.uppercase;
  let f = options.lowercase;
 
  if (b < 32 && d !== false && d !== true) {
  //Output number 2
  //function length here
  function panjang (str) {
    let hasil = ''
    //let b = options.length;
    for(let i=0; i< b; i++) {
    hasil += randomStr(str)[i]
    }
    return hasil;
    }
    console.log('Output '+panjang(b));
  }
  else if (c === false) {
  //Output number 3
  //function boolean to number here
  function bolean1 (num) {
    let library = '1234567890'
    let total = '';
    
    for (let i=0; i< randomStr(num).length; i++) {
        total += library.charAt(Math.floor(Math.random() * library.length));
    }
    return total;
    }
    console.log('Output '+bolean1(c));  
  }
  else if (d === false && f !== true) {
  //Output number 4
  //function boolean to string here
  function boelan2 (str) {
    let hasil = ''
    let library = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i=0; i< 32; i++) {
      hasil += library.charAt(Math.floor(Math.random() * library.length));
    }
    return hasil;
    }
    console.log('Output '+boelan2(d));
  }
  else if (e === true) {
    //Output number 5
    //function boolean to uppercase here
    function strUpp (str) {
      let hasil = ''
      let library = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      for (let i=0; i< randomStr(str).length; i++) {
        hasil += library.charAt(Math.floor(Math.random() * library.length));
      }
      return hasil;
      }
      console.log('Output '+strUpp(e));
  }
  else if (d === false && f === true && b < 32) {
    //Output number 6
    //function boolean to lowercase here
    function strLow (str) {
      return randomStr (str);
    }   
    console.log('Output' +strLow(f));
    }
 
  else {
    // Outpur number 1, default here
    console.log('Output Default ' +randomStr(a))
  }
})

//console.log('#6 Get IP Address in private network')
function getIntIP (num) {
  //library get ip address from ubuntu
  return require('child_process').execSync("ifconfig | grep 'inet' | grep -v inet6 | grep -v 127.0.0.1 | awk '{print $2}'").toString().trim();
  //other way : install packet NPM IP first
  //let ip = require("ip");
  // eturn ip.address()

}
prog
   .command('ip', 'give this command') 
   //.argument('[app...]', 'App to the command') //auto array
   .action(function(args) {
   let a = args;
   console.log(getIntIP(a));
})

//console.log('#7 Get External IP Address')
// function getExtIP () {
//   const {promisify} = require('util'); //<-- Require promisify
//   const getIP = promisify(require('external-ip')()); // <-- And then wrap the library
//   getIP().then((ip)=> {
//     console.log(ip);
//   }).catch((error) => {
//     console.error(error);
//   });
// }
prog
   .command('ip-external', 'give this command') 
   //.argument('[app...]', 'App to the command') //auto array
   .action(function(args) {
   let a = args;
   const {promisify} = require('util'); //<-- Require promisify
   const getIP = promisify(require('external-ip')()); // <-- And then wrap the library
    
   getIP().then((ip)=> {
       console.log(ip);
   }).catch((error) => {
       console.error(error);
   });
})

//console.log('#8 Get headlines from https://www.kompas.com')
function getHeadlines () {
  const cheerio = require('cheerio');
  const request = require('request');
  
  const url = 'https://www.kompas.com';
  
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let $ = cheerio.load(body);
      $('h2.headline__thumb__title').each(function(i, element){
        var a = $(this).prev();
        console.log(a.text());
        let title = $(this).text();
        let URL = $(this).parents().attr('href');
        console.log(`TITLE: ${title}`);
        console.log(`URL: ${URL}`);
       });
      
    } else {
      console.error(error.message);
    }
  });

}
prog
   .command('headlines', 'give this command') 
   //.argument('[app...]', 'App to the command') //auto array
   .action(function(args) {
   let a = args;
    getHeadlines(a);
});

//console.log('#9 Import/Export CSV/XLS/XLSX file.')
prog
   .command('convert', 'give this command') 
   .argument('<cApp>', 'App to the command') //auto array
   .argument('<hApp>', 'App to the command') //auto array
   .action(function(args) {
    var xlsx = require('node-xlsx');
    var fs = require('fs');
    var obj = xlsx.parse('./' + args['cApp']); // parses a file
    var rows = [];
    var writeStr = "";
    
    //looping through all sheets
    for(var i = 0; i < obj.length; i++)
    {
        var sheet = obj[i];
        //loop through all rows in the sheet
        for(var j = 0; j < sheet['data'].length; j++)
        {
                //add the row to the rows array
                rows.push(sheet['data'][j]);
        }
    }
    
    //creates the csv string to write it to a file
    for(var i = 0; i < rows.length; i++)
    {
        writeStr += rows[i].join(",") + "\n";
    }
    
    //writes to a file, but you will presumably send the csv as a      
    //response instead
    fs.writeFile('./' + args['hApp'], writeStr, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("test.csv was saved in the current directory!");
    });
});

//console.log('#10 Get a screenshot from a URL')
function screen () {
  const puppeteer = require('puppeteer');

  async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: 'google.png'});
  await browser.close();  
  }

  return getPic();
}
prog
   .command('screenshot', 'give this command') 
   .argument('[app]', 'App to the command') //auto array
   .option('--format','Tail <lines> lines of logs after deploy', prog.STRING)
   .action(function(args) {
   let a = args;
   let b = args['app']
   console.log(screen(b))
});

console.log('#11 Get screenshots from a list of file')
function screenItems1 () {
  // read a text
  fs = require('fs');
  function readLines(input, func) {
    var remaining = '';

    input.on('data', function(data) {
      remaining += data;
      var index = remaining.indexOf('\n');
      let counter = 1;
      
      // console.log(index)

      while (index > -1) {
        var line = remaining.substring(0, index);
        remaining = remaining.substring(index + 1);
        index = remaining.indexOf('\n');
        func(line, counter++);

      }
    });

    input.on('end', function() {
      if (remaining.length > 0) {
        func(remaining);
      }
    });
  }
  
  function func(data,counter) {

    const puppeteer = require('puppeteer');
    async function getPic() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto(data);
    await page.setViewport({width: 800, height: 500})
    await page.screenshot({path: `simpan/nama ${counter}.png`});
    await browser.close();  
  }

  return getPic();
  //console.log(data); 
  }
  
  var input = fs.createReadStream('list.txt');
  readLines(input, func);
  
}
prog
   .command('screenshot-list', 'give this command') 
   .argument('[app]', 'App to the command') //auto array
   .option('--format','Tail <lines> lines of logs after deploy', prog.STRING)
   .action(function(args) {
   let a = args;
   let b = args['app']
   screenItems1(b);
});

console.log('#12 Get all information about new movies in theaters for today from http://www.21cineplex.com/nowplaying')
function newMovies (str) {
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
}

prog
   .command('movies', 'give this command') 
   //.argument('[app...]', 'App to the command') //auto array
   .action(function(args) {
    let a = args 
    newMovies(a)
})     
prog.parse(process.argv);