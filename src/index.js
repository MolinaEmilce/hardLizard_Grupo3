let homePage = require('./homePage')

let movies = homePage.leerJSON()

let sucursales = require ('./sucursales')

let theaters = sucursales.leerJSON()

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
    }
}