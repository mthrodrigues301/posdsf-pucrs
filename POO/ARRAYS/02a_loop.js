// 02a_loop.js

var a = [];
a[0] = Math.random();
a[1] = Math.random();
a[9] = Math.random();
console.log(a.length);

console.log(" -for .. in ");
console.log(" -=-=-=-=- ");
for (let val in a) // valores que estão em a, somente os valores que estão armazenados
    console.log(" --> " + val);

console.log(" -=-=-=-=- \n");

console.log(" -for .. of- ");
console.log(" -=-=-=-=- ");

for (let val of a) // valores que pertencem a, lista todos os espaços até os undefined
    console.log(" --> " + val);

console.log(" -=-=-=-=- \n");

console.log(" -for (;;))- ");
console.log(" -=-=-=-=- ");
for (let i = 0; i < a.length; i++) // define os indices para acessar
    console.log(" -->" + i + ": " + a[i]);