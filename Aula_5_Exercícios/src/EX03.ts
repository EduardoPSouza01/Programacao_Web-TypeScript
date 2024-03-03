// Convertendo CPF que é uma string em um vetor de Number removendo os . e -

function conversor(cpf: string): number[] {
    let limparcpf = cpf.replace(/[^\d]/g, ''); // Removendo os . e o -
    let converterCPFparaNumber = limparcpf.slice(0, 9).split('').map(Number); // Convertendo a string em número, excluindo os dígitos verificadores
    return converterCPFparaNumber;
}

function calcularDigitoVerificador(cpfParcial: number[]): number {
    let aux: number = 10;
    let resultado: number = 0;
    for (let i = 0; i < 9; i++) {
        resultado = resultado + (cpfParcial[i] * aux);
        aux--;
    }

    let restoDaDivisao: number = resultado % 11;

    // Se o resto for menor que 2, o dígito verificador é 0, caso contrário, é 11 menos o resto
    return restoDaDivisao < 2 ? 0 : 11 - restoDaDivisao;
}

function verificarCPF(cpf: string): boolean {
    let cpfArray: number[] = conversor(cpf);

    // Calcula o primeiro dígito verificador
    let primeiroDigito: number = calcularDigitoVerificador(cpfArray);

    // Adiciona o primeiro dígito verificador ao array
    cpfArray.push(primeiroDigito);

    // Calcula o segundo dígito verificador
    let segundoDigito: number = calcularDigitoVerificador(cpfArray);

    // Adiciona o segundo dígito verificador ao array
    cpfArray.push(segundoDigito);

    // Verifica se os dígitos verificadores no CPF correspondem aos calculados
    return cpfArray[9] === Number(cpf[9]) && cpfArray[10] === Number(cpf[10]);
}


let cpfTeste: string = "529.982.247-25";
let cpfValido: boolean = verificarCPF(cpfTeste);

if (cpfValido) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}