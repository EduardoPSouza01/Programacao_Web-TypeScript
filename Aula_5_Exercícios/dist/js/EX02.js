"use strict";
function mediaPond(mnedia, peso) {
    let somaMedia = 0;
    let somaPeso = 0;
    for (let i = 0; i < mnedia.length; i++) {
        somaMedia = somaMedia + (mnedia[i] * peso[i]);
        somaPeso += peso[i];
    }
    let resp = somaMedia / somaPeso;
    return resp;
}
let resp = mediaPond([7, 9, 8, 6], [5, 5, 5, 5]);
console.log("A media é ", resp);
