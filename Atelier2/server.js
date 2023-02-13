



var http = require('http');
var url=require("url")
var querystring = require ('querystring');
var server = http.createServer(function(req, res){
   
   /*var page = url.parse(req.url).pathname;
   console.log(page);
   res.writeHead(200,{"Content-Type":"text/html"});
   if(page == '/'){
        res.write('Vous etes dans la page d\'accueil');
    }else if(page == '/Contact'){
        res.write('Vous etes dans la page Contact !');
    }else if(page == '/Affichage/1/user'){
        res.write('Afficher l\'utilisateur qui a l\'id 1 !');
    }else{
        res.write('404 not found !');
    }

   */
     
   
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"Content-Type":"text/html"});
   
   if('id' in params && 'login' in params){
    res.write('Votre id est'+params['id']
    +'et votre login'+params ['login']); 
   }else{
    res.write('veuillez saisri votre id et login!')
   }
    
    
    res.end();
});
server.listen(8086);