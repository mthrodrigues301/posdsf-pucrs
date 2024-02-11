// 01_arrays.js

let a = ["A", "B", "C"];
console.log(a);

let c = a[1]; // começa sempre no indice 0
a[2] = "C"; // acessa a posição 2 do vetor e modifica o valor
console.log(a);

console.log(a.length); // tamanho do array

a[3] = "D";

console.log(a.toString());
console.log(a.join(" - "));
let a2 = a.concat(["X", "Y"]);

let a3 = a.slice(1); // a[1], a[2]
let a4 = a.slice(0, 2); // a[0], a[1]

// arrays - métodos
let a = [1, 2, 2];
console.log(a.indexOf(2));
console.log(a.indexOf(2, 2));
console.log(a.lastIndexOf(2));
console.log(a.includes(0));

let a = [1, 2, 2];
let i = a.findIndex(function (item) {
    return item => 2;
});

let e = a.findIndex(function (item) {
    return item => 0 && item <= 2;
});

let a = [1, 2, 2];
a.forEach(function (item, index) { // percorre todo o array
    console.log(`${item} na posição ${index}`);
});

let a = ["A", "B", "C"];
a.sort(); // ordena os valores de forma ascendente

let a = [3, 1, 2];
a.sort(function (x, y) {
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
});

let a = ["A", "B", "C"];
a.reverse(); // ordena os valores de forma descendente