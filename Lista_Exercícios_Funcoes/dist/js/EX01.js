"use strict";
/*Exercício 1
Crie uma função que receba uma lista de números como parâmetro e retorne o
maior número da lista. */
function maiorValor(valores) {
    let resp = 0;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > resp) {
            resp = valores[i];
        }
    }
    return resp;
}
console.log(maiorValor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
