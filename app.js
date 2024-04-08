const { obtenerBicicletas } = require('./data/datosBici');

const dhBici = {
    bicicletas: obtenerBicicletas(),

    buscarBici: function(id) {
        const biciEncontrada = this.bicicletas.find(bici => bici.id === id);
        return biciEncontrada || 'Bicicleta no encontrada';
    },

    venderBici: function(id) {
        const bici = this.buscarBici(id);
        if (typeof bici === 'object') {
            bici.vendida = 'si';
            return bici;
        } else {
            return bici; // Retorna el mensaje de que la bicicleta no fue encontrada
        }
    },

    biciParaLaVenta: function() {
        return this.bicicletas.filter(bici => bici.vendida === 'no');
    },

    totalDeVentas: function() {
        return this.bicicletas.filter(bici => bici.vendida === 'si')
                             .reduce((total, bici) => total + bici.precio, 0);
    },

    aumentoBici: function(porcentaje) {
        return this.bicicletas.map(bici => {
            bici.precio += bici.precio * (porcentaje / 100);
            return bici;
        });
    },

    biciPorRodado: function(rodado) {
        return this.bicicletas.filter(bici => bici.rodado === rodado);
    },

    listarTodasLasBici: function() {
        this.bicicletas.forEach(bici => console.log(bici));
    }
};

// Prueba de las funcionalidades
console.log(dhBici.buscarBici(2));
console.log(dhBici.venderBici(2));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());
console.log(dhBici.aumentoBici(10));
console.log(dhBici.biciPorRodado(26));
dhBici.listarTodasLasBici();
