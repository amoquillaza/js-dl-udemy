let datosEntreno = [
    { input: [189], output: [200] },        
    { input: [200], output: [300] },
    { input: [220], output: [300] },
    { input: [230], output: [350] },
    { input: [240], output: [330] },
    { input: [260], output: [340] },
    { input: [270], output: [400] },
    { input: [275], output: [500] },
    { input: [290], output: [550] },
    { input: [300], output: [520] },
    { input: [330], output: [550] }
];
console.log(datosEntreno);

let regresion = new RegresionSimple(datosEntreno);
regresion.train();

console.log(regresion.pesos);

console.log(regresion.prev(200));

function RegresionSimple(datosEntreno){

    this.datosEntreno = datosEntreno;
    this.pesos = [];
    this.train = function (){
        let n = this.datosEntreno.length;
        let mediaY = 0;
        let mediaX = 0;
        let mediaX2 = 0;
        let mediaXY = 0;

        let sumX = 0;
        let sumY = 0;
        let sumX2 = 0;
        let sumXY = 0;

        this.datosEntreno.forEach(element =>{
            sumX = sumX + element.input[0];
            sumY = sumY + element.output[0];
            sumX2 = sumX2 + Math.pow(element.input[0], 2);
            sumXY = sumXY + element.input[0] * element.output[0];
        });

        mediaY = sumY/n;
        mediaX = sumX/n;
        mediaX2= sumX2/n;
        mediaXY= sumXY/n;

        let m = (mediaY - (mediaXY/mediaX))/(mediaX-(mediaX2/mediaX));
        let b = mediaY - m * mediaX;

        this.pesos[0] = m;
        this.pesos[1] = b;
    }

    this.prev = function (x) {
        return this.pesos[0] * x + this.pesos[1];
    }

}










