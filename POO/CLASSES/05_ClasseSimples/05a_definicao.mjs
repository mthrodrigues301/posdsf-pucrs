// 05a_definicao.mjs

export class Carro {
    #_tanque;
    #_capacidadeDoTanque;
    constructor(capacidadeDoTanque) {
        this.#_tanque = 0;
        this.#_capacidadeDoTanque = capacidadeDoTanque;
    }

    get tanque() {
        return this.#_tanque;
    }

    get capacidadeDoTanque() {
        return this.#_capacidadeDoTanque;
    }

    set tanque(qtd) {
        if (qtd >= 0) {
            if ((qtd + this.#_tanque) > this.#_capacidadeDoTanque)
                this.#_tanque = this.#_capacidadeDoTanque;
            else
                this.#_tanque += qtd;
        }
    }
}