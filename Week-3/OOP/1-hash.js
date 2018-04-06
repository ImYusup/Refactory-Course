#!/usr/bin/env node
//ref: https://www.npmjs.com/
var md5 = require('md5');
var sha1 = require('sha1');
var sha256= require('sha256');
var sha512 = require('sha512');

class Hash {
    // md5 here   
    md5 (messege) {
        return md5(messege)
    }
    // sha1 here
    sha1 (messege) {
        return sha1(messege)
    } 
    // sha 256 here
    sha256 (messege) {
        return sha256(messege)
    }
    //sha 512 here
    sha512 (messege) {
        return sha512(messege)
    }
}

let hasil =  new Hash()
console.log(hasil.md5("secret"))
console.log(hasil.sha1("secret"))
console.log(hasil.sha256("secret"))
console.log(hasil.sha512("secret"))


