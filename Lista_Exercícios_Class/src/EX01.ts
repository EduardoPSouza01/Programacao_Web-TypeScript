class AnoDocarro{
    private carro:string;
    private anoCarro: number;

    constructor(carro:string, anoCarro:number ){
        this.carro = carro;
        this.anoCarro = anoCarro;
    }


    get getCarro():string{
        return this.carro;
    }

    set setCarro(carro:string){
        this.carro =carro;
    }

    get getanoCarro():number{
        return this.anoCarro
    }

    set setanoCarro(anoCarro:number){
        this.anoCarro = anoCarro;
    }
}

let ano_carro = new AnoDocarro('Argo', 2022);