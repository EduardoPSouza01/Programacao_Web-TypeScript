class Calculadora{
    private num1:number;
    private num2:number;

    constructor(a:number, b:number){
        this.num1 = a;
        this.num2 = b;
    }

    get getNum1():number{
        return this.num1;
    }

    set setNum1(num1:number){
        this.num1 = num1;
    }

    get getNum2():number{
        return this.num2;
    }

    set setNum2(num2:number){
        this.num2 = num2;
    }

    somar():number{
        return this.num1 + this.num2;
    }
    subitrair(){
        return this.num1 - this.num2;
    }
    dividir(){
        return this.num1 / this.num2;
    }
    mult(){
        return this.num1 * this.num2;
    }
    porcetagem(){
        return this.num1 + (this.num1 * (this.num2 / 100));
    }
}


let calculadora:Calculadora= new Calculadora(2,5);
console.log(calculadora.somar());
console.log(calculadora.subitrair());
console.log(calculadora.dividir());
console.log(calculadora.mult());
console.log(calculadora.porcetagem());
