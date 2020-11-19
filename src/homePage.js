const fs = require('fs')


module.exports = {
    bd : './data/movies.json',

    titulo: '                   -----------------------------------------------------------------------------------------------------------------------------------\n'  +                  
    '                    Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n' +   '                   -----------------------------------------------------------------------------------------------------------------------------------\n\n\n ',

    totalPelis : '*************************************\n' + ' Total de películas en cartelera: ',

    secciones: '\n\n\n' + 
    '****************************************\n'  +     
    'Recordá que podés visitar las secciones: ' + '\n' + 
    '֎ En Cartelera' + '\n' +                    
    '֎ Más Votadas' + '\n' + 
    '֎ Sucursales' + '\n' +
    '֎ Contacto' + '\n' +
    '֎ Preguntas Frecuentes',


    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    },
    
    listarPelis: function(){
        let movies = this.leerJSON();
        let ordenado = [];
        
        movies.movies.forEach(function(movie){
			    ordenado.push(movie.title)
              })
        
        return ordenado.sort()
    } 
			
		     
}