let homePage = require('./homePage')

let movies = homePage.leerJSON()

let sucursales = require ('./sucursales')

let theaters = sucursales.leerJSON()

let enCartelera = require('./enCartelera');

let masVotadas = require('./masVotadas');

let preguntasFrecuentes = require('./preguntasFrecuentes');

module.exports = {
    homePage : function(req,res){
        res.write('---------------------------------------------------------------------------------------------------------------------------------\n');                    //Esto lo agrego para que tenga una mejor vista
        res.write(homePage.titulo+`\n`)         
        res.write('---------------------------------------------------------------------------------------------------------------------------------\n\n\n');
                                //Esto lo agrego para que tenga una mejor vista
        res.write(`Total de películas en cartelera: ${movies.movies.length} \n`.toUpperCase());        
        res.write('***********************************\n\n\n');
        //Esto lo agrego para que tenga una mejor vista

        res.write(`\n➢ Listado de peliculas:\n\n`)

        let titilosOrdenados = homePage.listarPelis() 
        
        titilosOrdenados.forEach(movie => {
            res.write(`\n★ ${movie}\n\n`)
        })        

        res.write('\n\n\n');
        res.write('****************************************\n');        //Esto lo agrego para que tenga una mejor vista
        res.write('Recordá que podés visitar las secciones: ' + '\n' + 
        '֎ En Cartelera' + '\n' +                    //el signo extraño es un Unicode lo agregue para una mejor vista
        '֎ Más Votadas' + '\n' + 
        '֎ Sucursales' + '\n' +
        '֎ Contacto' + '\n' +
        '֎ Preguntas Frecuentes');
        res.end()
    },
    enCartelera : function(req,res){
        let cartelera = enCartelera.leerJson(); //trae el metodo del archivo requerido de arriba
        res.write(enCartelera.tituloPrincipal);
        
        res.write(enCartelera.totalPeliculas()+'\n\n');//total de peliculas

        
        enCartelera.ordenCartelera().forEach(element => {
            res.write('\n                  ------------------------------------------------');
            res.write(`\n\n ${element.title.toUpperCase()}\n\n ${element.overview}`);

        });//recorro del metodo ordenCartelera  extrayendo lo neceario a mostrar

        res.end();
    },
    sucursales : function(req, res){
        res.write ('︹︹︹︹︹︹︹︹︹︹︹︹ \n')
        res.write ('    NUESTRAS SALAS\n'    )
        res.write ('︺︺︺︺︺︺︺︺︺︺︺︺')

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
    pregFrecuentes : function(req,res){

        res.write(preguntasFrecuentes.tituloPrincipal+'\n\n');
		res.write(preguntasFrecuentes.subtitulo1 +  preguntasFrecuentes.totalPreguntas()+ '\n\n');
        res.write(preguntasFrecuentes.subtitulo2 + '\n\n');

        let preguntas = preguntasFrecuentes.leerJSON().faqs;

        preguntas.forEach(function(cadaPregunta){
            res.write('\n\n\n')
            res.write(`${cadaPregunta.faq_title.toUpperCase()}\n\n ${cadaPregunta.faq_answer}`);
        })

        res.end()

    },
    masVotadas : function(req,res){
        
		res.write(`\n\n`)
		res.write(`➢ Más Votadas.\n\n`)
		res.write(`➢ Total de películas​: ${masVotadas.cantidad()}`);
		
        res.write(`\n\n➢ Rating Promedio:`+ masVotadas.promedio() +`\n\n`);
        
		res.write(`\n➢ Listado de peliculas:\n\n`)
        let peliculasFinales = masVotadas.ordenado();
        peliculasFinales.forEach(function(pelicula){
				res.write(`\n★ ${pelicula.title.toUpperCase()}\n\n`)
				res.write(`• Rating: ${pelicula.vote_average}\n`)
				res.write(`• Reseña: ${pelicula.overview}\n`)
			});
        res.end()

    }


}