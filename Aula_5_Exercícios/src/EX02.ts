function mediaPond(mnedia:number[], peso:number[]):number{
    let somaMedia:number = 0;
    let somaPeso:number= 0;
    for(let i=0; i<mnedia.length; i++){
        somaMedia = somaMedia + (mnedia[i] * peso[i]);
        somaPeso += peso[i];
    }
    let resp = somaMedia / somaPeso;
    return resp;
}

let resp:number = mediaPond([7,9,8,6],[5,5,5,5]);
console.log("A media é ",resp);