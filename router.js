const index = require('./src/index');


module.exports=function(req,res){
    switch (req.url) {
		
        case '/': //
             index.homePage(req,res);
             res.end();
			 break;
		
        case '/en-cartelera': //
             index.enCartelera(req,res);
			 break;

        case '/mas-votadas': //
             index.masVotadas(req,res)		
			 break;

        case '/sucursales': //		    
             index.sucursales(req,res)
			 break;

        case '/contacto': 
             index.contacto(req,res)		    
			 break;

        case '/preguntas-frecuentes': 
             index.preguntasFrecuentes(req,res)		
			 break;
		default:
               res.end('404 not found')
               break;
	}

}
