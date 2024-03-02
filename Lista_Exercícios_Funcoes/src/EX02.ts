/*Exercício 2
Desenvolva uma função que receba um número como parâmetro e verifique se
ele é par ou ímpar. Retorne true se for par e false se for ímpar.*/


function numParImpar(num:number):number{
    let resp:number;
    (num % 2)== 0? resp = 0: resp = 1;
    return resp;
}

let valor:number = numParImpar(2);
 
valor == 0 ? console.log("Numero Par") : console.log("Numero Inpar");