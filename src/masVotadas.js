<<<<<<< HEAD
//masVotadas
=======
>>>>>>> dc897634c0b657058d5837c506c9fe96fda9960f
const fs = require('fs')

module.exports = {
    bd : './data/movies.json',
    
    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    },
<<<<<<< HEAD
    maSvotadas: function(){
        let movies=this.leerJSON()
        let votadas = movies.movies.filter(function(movie)
		{
			return movie.vote_average >=7 
		})
		votadas.sort(function(a,b){
			return((a.title<b.title)?-1:((a.title>b.title)?1:0))
        })
        return votadas
    },
    cantidad: function(){
        let movies=this.leerJSON()
        let votadas = movies.movies.filter(function(movie)
		{
			return movie.vote_average >=7 
		})
        return votadas.length
    },
    promedio: function(){
        let movies=this.leerJSON()
        let votadas = movies.movies.filter(function(movie)
		{
			return movie.vote_average >=7 
        })
        let promedio=0
		votadas.forEach(function(elemento){
				promedio=promedio+elemento.vote_average				
			})	

        return promedio=promedio/votadas.length;
        }
    }

=======
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
>>>>>>> dc897634c0b657058d5837c506c9fe96fda9960f
