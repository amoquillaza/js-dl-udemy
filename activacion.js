class Activacion{

    static lineal(net, derivada = false){

        return derivada ? 1 : net;

    }

    static escalon(net, derivada = false){

        return derivada ? 1 : (net < 0 ? 0 : 1);

    }

    static escalonv2(net, derivada = false){

        return derivada ? 1 : (net < 0 ? -1 : 1);

    }

    static sigmoide(net, derivada = false){

        return derivada ? this.derivadaSigmoide(net) : 1/(1+Math.pow(Math.E,-net));

    }

    static derivadaSigmoide(net){

        let sigmoide = this.sigmoide(net);
        return sigmoide * (1 - sigmoide);

    }

    static tang(net, derivada = false){

        return derivada ? this.derivadaTang(net) : (Math.exp(net) - Math.exp(-net)) / (Math.exp(net) + Math.exp(-net));

    }

    static derivadaTang(net){

        let tang = this.tang(net);
        return Math.pow(tang, 2);

    }

    static relu(net, derivada = false){

        if(derivada){
            return (net < 0) ? 0 : 1;
        } else {
            return (net < 0) ? 0 : net;
        }
        
    }


}

module.exports = Activacion;