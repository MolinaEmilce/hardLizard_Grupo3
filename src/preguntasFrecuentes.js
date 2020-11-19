const fs = require('fs')

module.exports = {
    bd : './data/faqs.json',
    titulo1: "➢ Preguntas Frecuentes.",
    titulo2: "➢ Total de preguntas​:",
    titulo3: "➢ Listados de preguntas:",
    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    } 
}