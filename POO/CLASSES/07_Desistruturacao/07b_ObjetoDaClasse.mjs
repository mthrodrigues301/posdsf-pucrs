// 07b_ObjetoDaClasse.mjs

import { UmaClasse } from "./07b_umaClasse.mjs";

let umaClasse = new UmaClasse("Primeiro Atributo");

let { capturaPrimeiroAtributo: umAtributo, outroAtributo } = umaClasse;

console.log(`Um Atributo: ${umAtributo}`);
console.log(`Outro Atributo: ${outroAtributo}`);