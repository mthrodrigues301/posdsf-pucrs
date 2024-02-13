// 02a_definecaoCJS.js - Alternativa A

class Circulo {
    constructor(r) {
        this.raio = r;
    }

    area() {
        return Math.PI * this.raio ** 2;
    }

    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
};

module.exports = Circulo;

// 02a_definecaoCJS.js - Alternativa B

module.exports = class Circulo {
    constructor(r) {
        this.raio = r;
    }

    area() {
        return Math.PI * this.raio ** 2;
    }

    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}