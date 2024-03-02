"use strict";
/*Exercício 9
Implemente uma função que retorne a soma de todos os números pares em um
array.*/
function numPares(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if ((vetor[i] % 2) == 0)
            console.log(vetor[i]);
    }
}
numPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
