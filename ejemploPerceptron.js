const Perceptron = require('./perceptron');
const LearningRate = require('./learningRate');

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

let perceptron = new Perceptron();
lr = new LearningRate();
lr.initLearningRate(perceptron, datosEntreno);
console.log(lr.lr);
let tasa = lr.lr;

perceptron.loadTrainingData(datosEntreno);
perceptron.initPesos();
perceptron.train(1000, tasa, false);

//let net = perceptron.net([75,1,650]);
//let out = perceptron.out(net);
//console.log(net);
//console.log(out);
//out = perceptron.forward([75,1,650]);
//console.log(out);
//let error = perceptron.error([200], out);
//console.log(error);
