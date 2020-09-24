class LearningRate{

    constructor(){

        this.lr = 0.1;

    }

    initLearningRate(redNeuronal, datosEntreno){

        let entrar = true;
        let lim = 1000;
        let count = 0;

        while (entrar) {
            
            redNeuronal.loadTrainingData(datosEntreno);
            redNeuronal.initPesos();

            let errores = redNeuronal.train(10, this.lr, false);

            let fracaso = false;
            for (let i = 1; i < errores.length; i++) {
                if(errores[i] > errores[i - 1] || Number.isNaN(errores[i])){

                    fracaso = true;
                    break;

                }
                
            }
            
            (count >= lim) ? entrar = false : (fracaso ? this.lr = this.lr * 0.9 : entrar = false);
            count++

        }
    }

}

module.exports = LearningRate;