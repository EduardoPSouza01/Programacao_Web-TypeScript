/*Exercício 10
Crie uma função que calcule o fatorial de um número. Utilize essa função para
calcular o fatorial de diferentes números.*/

function fatorial(num:number):number{
    let resp:number =1;

    for(let i=1; i<=num; i++){
        resp = resp * i;
    }

    return resp;
}


console.log(fatorial(6));