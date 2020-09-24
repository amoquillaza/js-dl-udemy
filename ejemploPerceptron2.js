const Perceptron = require('./perceptron');
const LearningRate = require('./learningRate');

let and = [
    { input: [0,0], output: [0]},
    { input: [0,1], output: [0]},
    { input: [1,0], output: [0]},
    { input: [1,1], output: [1]}
];

let or = [
    { input: [0,0], output: [0]},
    { input: [0,1], output: [1]},
    { input: [1,0], output: [1]},
    { input: [1,1], output: [1]}
];

let xor = [
    { input: [0,0], output: [0]},
    { input: [0,1], output: [1]},
    { input: [1,0], output: [1]},
    { input: [1,1], output: [0]}
];

let datosEntreno = and;

/* let perceptron = new Perceptron('escalon');
lr = new LearningRate();
lr.initLearningRate(perceptron, datosEntreno);
let tasa = lr.lr;
console.log(tasa);
perceptron.loadTrainingData(datosEntreno);
perceptron.initPesos();
perceptron.train(100, tasa, true); 

perceptron.save();*/

let perceptron = new Perceptron('escalon');
perceptron.load(function(){
    let pred = perceptron.forward([0,0]);
    console.log(pred);
});

