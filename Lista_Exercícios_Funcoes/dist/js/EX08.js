"use strict";
/*Exercício 8
Crie uma função que receba uma string e retorne a mesma string, mas com as
palavras em ordem reversa. */
function ordemReversa(palavra) {
    let contador = palavra.length - 1;
    let vetorAux = "";
    for (let i = 0; i < palavra.length; i++) {
        vetorAux += palavra[contador];
        contador--;
    }
    console.log(vetorAux);
}
ordemReversa("eduardo");
