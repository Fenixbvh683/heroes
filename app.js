// Requerimiento de modulos a utilizar
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;


// Configuracion de carpeta publica

app.use(express.static('public'));

// Configuracion de Rutas 

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')));
app.get('/nerners-lee', (req, res) => res.sendFile(path.join(_dirname, 'views', 'berbers-lee')));
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')));
app.get('/hamilton', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')));
app.get('/hopper', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hopper')));
app.get('/lovelace', (req, res) => res.sendFile(path.join(_dirname, 'views', 'lovelace')));
app.get('/turing', (req, res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')));


// Inicializacion de puerto a utilizar

// Opcion 1
app.listen(PORT, () => console.log('Inicializando servidor en http://localhost:'+PORT));

// Opcion 2
//app.listen(PORT, () => console.log(`Inicializando servidor en httP://localhost:${PORT}`));