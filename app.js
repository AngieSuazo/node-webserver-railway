require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlerbars
app.set('view engine', 'hbs'); //Para renderizar usar handlebars
hbs.registerPartials(__dirname + '/views/partials');

//middle: función que se ejecuta antes de hacer otra cosa
//*Servir contenido estátitco, tiene prioridad
app.use(express.static('public'));
//!Controlador
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Angie Suazo',
    titulo: 'Curso de node'
  }); //*RENDER
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Angie Suazo',
    titulo: 'Curso de node'
  }); //*RENDER
});
app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Angie Suazo',
    titulo: 'Curso de node'
  }); //*RENDER
});
app.get('*', (req, res) => {
  res.sendFile(__dirname +'/public/404.html')  //construir el path
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  //https://templated.co/roadtrip/
  
// app.get('/', (req, res) => {
//   res.send('Home page')
// });