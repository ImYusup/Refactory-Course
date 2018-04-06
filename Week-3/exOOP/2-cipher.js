#!/usr/bin/env node
//ref: https://gist.github.com/erans/8115172
const crypto = require('crypto');

class Cipher {
    constructor(message, password){
        this.message = message;
        this.password = password;
    }
      
    encrypt () {
        const cipher = crypto.createCipher('aes192', this.password);
        var crypted = cipher.update(this.message, 'utf-8', 'hex');
        crypted += cipher.final('hex');
        return crypted
    }
    decrypt () { 
        const decipher = crypto.createDecipher('aes192', this.password);
        var decrypted = decipher.update(this.message, 'hex', 'utf-8')
        decrypted += decipher.final('utf-8')
        return decrypted
    }
}

var message = new Cipher ('Ini tulisan rahasia', 'p4$$w0rd') 
const enkrip = message.encrypt()
console.log(enkrip)

var message = new Cipher (enkrip, 'p4$$w0rd') 
const dekrip = message.decrypt()
console.log(dekrip);