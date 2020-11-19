const fs = require('fs')

module.exports = {
    bd : './data/faqs.json',
    tituloPrincipal: "➢ Preguntas Frecuentes.",
    subtitulo1: "➢ Total de preguntas​:",
    subtitulo2: "➢ Listados de preguntas:",
    leerJSON : function() {
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    },
    totalPreguntas: function(){ //de la propiedad leerJson traemos solo la cantidad de preguntas
        let preguntas = this.leerJSON()
        return preguntas.total_faqs;
    }
}