let fs = require('fs'); //requerimos el modulo nativo

module.exports = {
    archivo : './data/movies.json', // traemos el archivo json
    tituloPrincipal : '▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n        Cartelera\n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n',
    leerJson : function(){
        let archivo = fs.readFileSync(this.archivo,'utf-8'); 
        let archivoParseado = JSON.parse(archivo); 
        return archivoParseado;
    },
    ordenCartelera : function(){
        let cartelera = this.leerJson().movies; 
        cartelera.sort((a,b)=>{
            return a.title < b.title ? -1 : ((a.title>b.title) ? 1 : 0);
        });
        return cartelera;
    },
    totalPeliculas : function(){
        let pelis = this.leerJson().total_movies;
        return 'Total de peliculas:  ' + pelis;
    }
}
