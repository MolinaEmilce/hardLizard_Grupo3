const fs = require('fs')


module.exports = {
    bd : './data/movies.json',

    titulo: "                             Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.",

    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    },
    
    listarPelis: function(){
        let movies=this.leerJSON()
        let ordenado = []
        
        movies.movies.forEach(function(movie){
			    ordenado.push(movie.title)
              })
        
        return ordenado.sort()
    } 
			
		     
}