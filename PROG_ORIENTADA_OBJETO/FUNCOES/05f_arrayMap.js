// 05f_arrayMap.js

array = [4, 5, 6, 7, 8, 9, 10];

var newArray = array.map((item) => item * 2);
console.log(newArray);

newArray = array.map((item) => { return { x: item, y: item * 2 } });
console.log(newArray);