/*Exercício 5
Desenvolva uma função que determine se um número é primo ou não. Retorne
true se for primo e false se não for.*/

function numPrimo(num:number):boolean{
    for(let i=0; i<num/2; i++){
        if((num % i) == 0)
            return false
    }
    return true;
}

let verificador:boolean = numPrimo(9);
verificador == false ? console.log("Numero não primo") : console.log("Numero é primo");







