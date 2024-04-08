const fs = require('fs');

function obtenerBicicletas() {
    const contenido = fs.readFileSync('./data/bicicletas.json', 'utf-8');
    const bicicletas = JSON.parse(contenido);
    return bicicletas;
}

module.exports = { obtenerBicicletas };
