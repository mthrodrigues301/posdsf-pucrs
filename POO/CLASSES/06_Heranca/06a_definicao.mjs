// 06a_definicao.mjs

import { Carro } from '../05_ClasseSimples/05a_definicao.mjs';

export class CarroComPlaca extends Carro {
    #_placa;
    constructor(placa) {
        super(55);
        this.#_placa = placa;
    }

    get placa() {
        return this.#_placa;
    }
}