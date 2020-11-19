let homePage = require('./homePage')

let movies = homePage.leerJSON()

let sucursales = require ('./sucursales')

let theaters = sucursales.leerJSON()

let enCartelera = require('./enCartelera');

let masVotadas = require('./masVotadas');

let preguntasFrecuentes = require('./preguntasFrecuentes');
let preguntas = preguntasFrecuentes.leerJSON()

let contacto = require('./contacto')

module.exports = {
    homePage : function(req,res){
        res.write(homePage.titulo);
                             
        res.write((`${homePage.totalPelis} ${movies.movies.length}`).toLocaleUpperCase());
        
        res.write(`\n\n\n\n➢ Listado de peliculas:\n\n`);

        let titilosOrdenados = homePage.listarPelis() 
        
        titilosOrdenados.forEach(movie => {
            res.write(`\n★ ${movie}`)
        })        

        res.write(homePage.secciones);
        res.end()
    },
    enCartelera : function(req,res){
        let cartelera = enCartelera.leerJson(); //trae el metodo del archivo requerido de arriba
      
        res.write(enCartelera.titulo);

        res.write(`           Total de películas: ${cartelera.total_movies}`);//total de peliculas

        let ordenado = cartelera.movies.sort((a,b)=>{
            return a.title < b.title ? -1 : ((a.title > b.title )  ? 1 : 0) ;
        });
        ordenado.forEach(element => {
            res.write('\n-------------------------------------------------------------------------');
            res.write(`\n\n ${element.title.toUpperCase()}\n\n ${element.overview}`);

        });//recorro lo guardado en la variable ordenado extrayendo lo neceario

        res.end();
    },
    sucursales : function(req, res){
        
        res.write(sucursales.titulo);

        res.write (`\n\n`)
        res.write (`Total de salas: ${theaters.total_theaters}`)
        res.write (`\n\n`)

         theaters.theaters.forEach(elemento =>{
            res.write (`
            ▸ Nombre de la sala: ${elemento.name} \n
            ▸ Direccion: ${elemento.address} \n
            ▸ Descripción: ${elemento.description} \n \n
            `)
    }) 
    res.end()
    },
    preguntasFrecuentes : function(req,res){
        res.write(preguntasFrecuentes.tituloPrincipal+`\n\n`)
		res.write(preguntasFrecuentes.subtitulo1+`${preguntas.total_faqs} \n\n`)
        res.write(preguntasFrecuentes.subtitulo2+`\n\n`)
        
    preguntas.faqs.forEach(question => {
        res.write(`\n ${question.faq_title}
      \n• ${question.faq_answer}\n\n`)
        });

        res.end()

    },masVotadas : function(req,res){
        
		res.write(`\n\n`)
		res.write(` Más Votadas.\n\n`.toUpperCase());
		res.write(`➢ Total de películas​: ${masVotadas.cantidad()}`);
		
        res.write(`\n\n➢ Rating Promedio:`+ masVotadas.promedio() +`\n\n`);
        
		res.write(`\n➢ Listado de peliculas:\n\n`)
        let peliculasFinales = masVotadas.ordenado();
        peliculasFinales.forEach(function(pelicula){
				res.write(`\n★ ${pelicula.title}\n\n`)
				res.write(`• Rating: ${pelicula.vote_average}\n`)
				res.write(`• Reseña: ${pelicula.overview}\n`)
			});
        res.end()

    },
    contacto : function(req,res){
        res.write(contacto.titulo1+`\n\n`)
		res.write(contacto.titulo2+ contacto.descripcion)
        res.end()
    }
    


}