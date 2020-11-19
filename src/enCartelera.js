let fs = require('fs'); //requerimos el modulo nativo

module.exports = {
    archivo : './data/movies.json', // traemos el archivo json
    titulo : '▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n' + 
    '                 Cartelera                     \n' + 
    '▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n\n',
    
    leerJson : function(){
        let archivo = fs.readFileSync(this.archivo,'utf-8'); 
        let archivoParseado = JSON.parse(archivo); 
        return archivoParseado;
    }
}
