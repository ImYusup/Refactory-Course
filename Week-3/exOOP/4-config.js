#!/usr/bin/env node
var fs = require('fs')

class Config {

    constructor(storage) {
        this.storage = storage
    }

    put(key, value) {
        this.storage.put(key, value)
    }

    get(key) {
        this.storage.get()
    }

    remove(key) {
        this.storage.remove(key)
    }

}

class ConfigFileStorage {

    constructor(file) {
        this.file = file;
    }

    put(key, value) {
        // check for file existing!
        if (fs.existsSync(this.file)) {
            let fileData
            // check read file
            fileData = fs.readFileSync(this.file, 'utf8')
            // check kondisi boolean
            fileData = fileData ? JSON.parse(fileData) : {}
            // increase text on file!!
            fileData[key] = value
            // console.log(fileData); <=== results parse
            // save data to file! dont use callback (!sync)
            fs.writeFileSync(this.file, JSON.stringify(fileData), 'utf8')
            // console.log(fileData[key])
            if (fileData[key] === Boolean(fileData[key])) {
                console.log('Be able to save boolean.')
            }
            else if (fileData[key] === String(fileData[key])) {
                console.log('Be able to save string.')
            }
            else if (fileData[key] === Number(fileData[key])) {
                console.log('Be able to save number.')
            }
            // else if (fileData[key] === ) {
            // console.log('Will update the "site_name" with new value.')  
            // }    
        }
    }

    remove(key) {
        let fileData = JSON.parse(fs.readFileSync(this.file, 'utf8'))
        delete fileData[key]
        fs.writeFileSync(this.file, JSON.stringify(fileData), 'utf8')
        console.log('Remove "site_name" key.');
    }

    get(key) {
        let fileData = fs.readFileSync(this.file, 'utf8')
        fileData = fileData ? JSON.parse(fileData) : {}
        console.log(fileData);
        console.log(this.put(key))
        if (fileData[key] !== this.put()) {
          console.log('Will return "Blog.')
        }
        else if (fileData[key] === this.put()) {
          console.log('Return null, because "site_name" was deleted')
        }
    }        
}

class ConfigNedb {
    put() {

    }
}

class ConfigMySql {
    put() {

    }
}

const config = new Config(new ConfigFileStorage('config.json'))

//config.put()
config.put('site_name', 'Blog')           // Be able to save string.
//config.put('maintenance', false)        // Be able to save boolean.
//config.put('age', 30)                   // Be able to save number
//config.put('site_name', 'Perfect Blog') // Be able to save boolean.
//config.remove('site_name')              // Remove "site_name" key.
config.get('site_name')                 // Will return "Blog". || //Return null, because "site_name" was deleted.


