let fs = require ('fs')

module.exports = {
    archivo : './data/theaters.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'))
    }
}