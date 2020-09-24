const { matrix } = require('mathjs');
const mathjs = require('mathjs');

let datosEntreno = [
    { input: [80,2,100], output: [400] },    
    { input: [60,2,900], output: [320] },
    { input: [90,3,250], output: [510] },
    { input: [55,2,350], output: [300] },
    { input: [30,1,520], output: [250] },
    { input: [80,4,90], output: [430] },
    { input: [65,2,700], output: [250] },
    { input: [120,3,400], output: [492] },
    { input: [100,4,800], output: [355] },
    { input: [75,1,650], output: [200] }
];

console.log('Entreno: ', datosEntreno);

let regresionMul = new RegresionMul(datosEntreno);
regresionMul.train();
console.log(regresionMul.pesos);
let precio = regresionMul.predecir([120,5,60]);
console.log(precio);


function RegresionMul(datosEntreno){
    this.datosEntreno = datosEntreno;
    this.pesos = [];

    this.train = function(){

        let matrixY = [];
        let matrixX = [];
        this.datosEntreno.forEach(element => {
            matrixY.push(element.output[0]);
            element.input.unshift(1);
            matrixX.push(element.input);
        });

        let mxt = mathjs.transpose(matrixX);
        let mxtport = mathjs.multiply(mxt,matrixX);
        let mxtporxinv = mathjs.inv(mxtport);
        let xtpory = mathjs.multiply(mxt,matrixY);

        this.pesos = mathjs.multiply(mxtporxinv,xtpory);

    }

    this.predecir = function(xArray){

        let value = this.pesos[0];
        // 0 => sesgo
        // 1 => metros
        // 2 => habitaciones
        // 3 => distancia playa
        for(let index=0;index<xArray.length;index++){
            let prov = this.pesos[index+1] * xArray[index];
            value += prov;
        }

        return value;
    }
}