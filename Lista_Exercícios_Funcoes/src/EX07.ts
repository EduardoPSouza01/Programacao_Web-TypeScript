/*Exercício 7
Crie uma função que receba um valor e uma porcentagem como parâmetros. A
função deve retornar o valor acrescido da porcentagem indicada.*/


function porcentagem(num:number, por:number):number{
    return num + (num * (por/ 100));
}


console.log(porcentagem(100,25));