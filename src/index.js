let homePage = require('./homePage')

let movies = homePage.leerJSON()

let sucursales = require ('./sucursales')

let theaters = sucursales.leerJSON()

let enCartelera = require('./enCartelera');



module.exports = {
    homePage : function(req,res){
        res.write('---------------------------------------------------------------------------------------------------------------------------------\n');                    //Esto lo agrego para que tenga una mejor vista
        res.write('Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n');
        res.write('---------------------------------------------------------------------------------------------------------------------------------\n\n\n');
                                //Esto lo agrego para que tenga una mejor vista
        res.write(`Total de películas en cartelera: ${movies.movies.length} \n`.toUpperCase());
        res.write('***********************************\n\n\n');
        //Esto lo agrego para que tenga una mejor vista
        
        let pelisOrdenadas = []
        movies.movies.forEach(movie => {
        pelisOrdenadas.push (movie.title);
        
        });

        pelisOrdenadas.sort();     //el método .sort() ordena alfabeticamente la variable pelisOrdenadas
        pelisOrdenadas.forEach(pelis => {
            res.write(pelis);
            res.write('\n');
        });
        

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
      
        res.write('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n');
        res.write('                 Cartelera                     \n');  //titulo
        res.write('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n\n');

        res.write(`           Total de películas: ${cartelera.total_movies}
        
        
        `);//total de peliculas

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
    masVotadas : function(req,res){
        
		res.write(`\n\n`)
		res.write(`➢ Más Votadas.\n\n`)
		res.write(`➢ Total de películas​:`+masVotadas.cantidad()+`\n\n`)
		
		//res.write(`➢ Rating Promedio:`+masVotadas.promedio.toFixed(2)+`\n\n`)
		//res.write(`\n➢ Listado de peliculas:\n\n`)
		//votadas.forEach(function(movie){
		//		res.write(`\n★ ${movie.title.toUpperCase()}\n\n`)
		//		res.write(`• Rating: ${movie.vote_average}\n`)
		//		res.write(`• Reseña: ${movie.overview}\n`)
		//	});

        res.end()

    },
    preguntasFrecuentes : function(req,res){
        res.write(preguntasFrecuentes.titulo1+`\n\n`)
		res.write(preguntasFrecuentes.titulo2+`${preguntas.faqs.length} \n\n`)
        res.write(preguntasFrecuentes.titulo3+`\n\n`)
        
    preguntas.faqs.forEach(question => {
        res.write(`\n ${question.faq_title}
      \n• ${question.faq_answer}\n\n`)
        });

        res.end()

    }


}