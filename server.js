var express = require('express');
var app = express();//Esto me permite utilizar express

const puerto = process.env.PORT || 3000;
const hbs = require('hbs');

//Todas las paginas que se guarden en la carpeta home pueden llamarse con la siguiente linea.
app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/partials');
app.set ('view engine','hbs');

// //Estamos solicitando una ruta
  app.get('/',  (req, res) => {
 res.render('home',{
     nombre:'Hector',
     anio: new Date().getFullYear().toString()
 });
  });
   

//Otra ruta
// app.get('/data',  (req, res) => {
    
//     res.send('Hola data' );
// });


app.get('/home',  (req, res) => {
    
    res.render('home' );
});


app.listen(puerto, () => {
    console.log(` Esuchando por el puerto ${puerto}}`  );
});