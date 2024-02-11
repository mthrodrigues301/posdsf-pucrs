// 05a_consumidor.mjs

import { Carro } from './05a_definicao.mjs';

var carro = new Carro(55);
console.log(carro.capacidade);
console.log(carro.tanque);

carro.tanque = 30;
console.log(carro.tanque);

carro.tanque = 30;
console.log(carro.tanque);

carro.tanque = 30;
console.log(carro.tanque);