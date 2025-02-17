

// Importamos el modulo de server
const server = require('./server/server')
require('./db/config')

// Accedemos a la hoja de .env
require('dotenv').config()

// Definido el puerto
const PORT = process.env.PORT || 9090;


// Delega la creacion del servidor -> server.js


// Escuchar el servidor (ejecucion en el puerto tal)
server.listen(PORT, () => console.log(`Servidor funcionando en el server ${PORT}`))