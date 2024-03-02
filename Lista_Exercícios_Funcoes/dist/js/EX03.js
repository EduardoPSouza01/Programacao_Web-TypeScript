"use strict";
/*Exercício 3
Implemente uma função que calcule a média aritmética de um array de números
e retorne o resultado. Utilize essa função para calcular a média de diferentes
conjuntos de números.*/
function soma(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}
console.log(soma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
