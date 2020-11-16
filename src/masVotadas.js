//masVotadas
const fs = require('fs')

module.exports = {
    bd : './data/movies.json',
    
    leerJSON : function() {
        
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
        
    },
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

