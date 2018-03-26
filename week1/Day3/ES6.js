console.log('===============1. Default Parameters in ES6===============');
var link = function link(height, color, url) {
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://azat.co'

    return height+ " " +color+ " " +url; 
}
console.log('this is ES4/ES5');
console.log(link());

var link = function(height = 50, color = 'red', url = 'http://azat.co') { 
       return height+ " " +color+ " " +url; 
}
console.log('this is ES6');
console.log(link());

console.log('===============1. Default Parameters in ES6===============');
var first = 'yusup';
var last = 'juniadi';
var id = 'ImYusup';
var name = 'Your name is ' + first + ' ' + last + '.'
var url = 'http://localhost:3000/api/messages/' + id
console.log('this is ES4/ES5');
console.log(name+ " " +url);

var name =  `Your name is ${first} ${last}.`
console.log('this is ES6');
console.log(name+ " " +url);

console.log('===============3. Multi-line Strings in ES6===============');
var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t'
var fourAgreements = 'You have the right to be you.\n\
    You can only be you when you do your best.'
console.log('this is ES4/ES5');
console.log(roadPoem+ "" +fourAgreements);    

var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`
var fourAgreements = `You have the right to be you.
    You can only be you when you do your best.`
console.log('this is ES6');
console.log(roadPoem+ "" +fourAgreements);  

console.log('===============4. Destructuring Assignment in ES6===============');
var a = [1,2,3,4,5]
var angka1 = a[0]
var angka2 = a[1]
console.log('this is ES4/ES5');
console.log(angka1+ " " +angka2);
[angka1,angka2] = a
console.log('this is ES6');
console.log(angka1+ " " +angka2); 

console.log('===============5. Enhanced Object Literals in ES6===============');
var serviceBase = {port: 3000, url: 'azat.co'},
    getAccounts = function(){return [1,2,3]}

var accountServiceES5 = {
  port: serviceBase.port,
  url: serviceBase.url,
  getAccounts: getAccounts,
  toString: function() {
    return JSON.stringify(this.valueOf())
  },
  getUrl: function() {return "http://" + this.url + ':' + this.port},
  valueOf_1_2_3: getAccounts()
}
console.log('this is ES4/ES5');
console.log(accountServiceES5.getUrl);

console.log('More info fot this one : https://webapplog.com/es6/')
