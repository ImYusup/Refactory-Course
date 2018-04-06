#!/usr/bin/env node

var fs = require('fs')

class Log {

    constructor(level, messege) {
        this.level = level;
        this.messege = messege;
    }

    getData() {
        let hasil = `[${new Date().toJSON()}]`+ " " + this.level + ": " + this.messege + "\n"
        return hasil
   }

    write () {
        // condition error
        try {
            fs.appendFileSync('app.log', this.getData())
            return 'success'
        } catch(error) {
            return error.messege
        }
    }
}

var results = new Log('INFO', 'This is an information about something.')
console.log(results.write());
var results = new Log('ERROR', 'We can\'t divide any numbers by zero.')
console.log(results.write());
var results = new Log('NOTICE', 'Someone loves your status.')
console.log(results.write());
var results = new Log('WARNING', 'Insufficient funds.')
console.log(results.write());
var results = new Log('DEBUG', 'This is debug message.')
console.log(results.write());
var results = new Log('ALERT', 'Achtung! Achtung!')
console.log(results.write());
var results = new Log('CRITICAL', 'Medic!! We\'ve got critical damages.')
console.log(results.write());
var results = new Log('EMERGENCY', 'System hung. Contact system administrator immediately!')
console.log(results.write());

