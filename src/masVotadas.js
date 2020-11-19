const fs = require('fs')

module.exports = {
    bd : './data/movies.json',
    
    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    },
    masVotadas: function(){
        let peliculass=this.leerJSON();
        let votadas = peliculass.movies.filter(function(movie){
			return movie.vote_average >=7 
		})
		
        return votadas;
    },
    ordenado : function(){
        let ordenadosPeliculas = this.masVotadas();
        ordenadosPeliculas.sort(function(a,b){
			return((a.vote_average<b.vote_average)? 1:((a.vote_average>b.vote_average)?-1:0));
        });
        return ordenadosPeliculas;
    },
    cantidad: function(){
        let peliculas=this.masVotadas();
        let total = peliculas.length ;
        return total;
    },
    promedio: function(){
        let peliculas = this.ordenado();
        let promedio=0;
		peliculas.forEach(function(elemento){
				promedio=promedio+elemento.vote_average				
			});
        let division = promedio / this.cantidad(); 
		return promedio = division.toFixed(2);
        }
}