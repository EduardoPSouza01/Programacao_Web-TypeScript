"use strict";
class AnoDocarro {
    constructor(carro, anoCarro) {
        this.carro = carro;
        this.anoCarro = anoCarro;
    }
    get getCarro() {
        return this.carro;
    }
    set setCarro(carro) {
        this.carro = carro;
    }
    get getanoCarro() {
        return this.anoCarro;
    }
    set setanoCarro(anoCarro) {
        this.anoCarro = anoCarro;
    }
}
let ano_carro = new AnoDocarro('Argo', 2022);
console.log(ano_carro.getCarro);
console.log(ano_carro.getanoCarro);
console.log(ano_carro.getCarro + ' ' + ano_carro.getanoCarro);
