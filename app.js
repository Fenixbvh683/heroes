// Requerimiento de modulos a utilizar
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;


// Configuracion de carpeta publica

app.use(express.static(path.join(__dirname,'public')));
//app.use('/css', express.static(__dirname + 'public/css'))

// Configuracion de Rutas 

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')));
app.get('/berners-lee', (req, res) => res.sendFile(path.join(__dirname, 'views', 'berners-lee.html')));
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')));
app.get('/hamilton', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')));
app.get('/hopper', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hopper.html')));
app.get('/lovelace', (req, res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html')));
app.get('/turing', (req, res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')));


// Inicializacion de puerto a utilizar

// Opcion 1
app.listen(PORT, () => console.log('Inicializando servidor en http://localhost:'+PORT));

// Opcion 2
//app.listen(PORT, () => console.log(`Inicializando servidor en httP://localhost:${PORT}`));