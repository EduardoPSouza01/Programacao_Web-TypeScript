"use strict";
class Calculadora {
    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    get getNum1() {
        return this.num1;
    }
    set setNum1(num1) {
        this.num1 = num1;
    }
    get getNum2() {
        return this.num2;
    }
    set setNum2(num2) {
        this.num2 = num2;
    }
    somar() {
        return this.num1 + this.num2;
    }
    subitrair() {
        return this.num1 - this.num2;
    }
    dividir() {
        return this.num1 / this.num2;
    }
    mult() {
        return this.num1 * this.num2;
    }
    porcetagem() {
        return this.num1 + (this.num1 * (this.num2 / 100));
    }
}
let calculadora = new Calculadora(2, 5);
console.log(calculadora.somar());
console.log(calculadora.subitrair());
console.log(calculadora.dividir());
console.log(calculadora.mult());
console.log(calculadora.porcetagem());
