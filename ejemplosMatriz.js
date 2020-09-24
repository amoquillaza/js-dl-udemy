const mathjs = require('mathjs');
let matrizA = [
    [2,3,5],
    [1,1,0]
];

let matrizB = [
    [3,6],
    [2,1],
//    [5,0],
];

let matrizC = [
    [4,1,2],
    [1,1,1]
];

console.log(matrizA);

let mxt = mathjs.transpose(matrizA);
console.log(mxt);

//let suma = mathjs.add(mxt, matrizB);
//console.log(suma);

let multi = mathjs.multiply(matrizB, matrizC);
console.log(multi);

//let det = mathjs.det(matrizA);
//console.log(det);

let inv = mathjs.inv(matrizB);
console.log(inv);

