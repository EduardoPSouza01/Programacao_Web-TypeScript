"use strict";
/*
Exercício 6
Implemente uma função que inverta a ordem dos elementos em um array.
Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.

*/
function ordemInversa(vetor) {
    let aux = vetor.length - 1;
    let vetorAux = [];
    for (let i = 0; i < vetor.length; i++) {
        vetorAux[i] = vetor[aux];
        aux--;
    }
    console.log(vetorAux);
}
ordemInversa([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]);
