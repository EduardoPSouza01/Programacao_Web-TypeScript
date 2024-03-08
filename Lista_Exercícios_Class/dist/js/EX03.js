"use strict";
class Catalogo {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.setNome = nome;
    }
    get getpreco() {
        return this.preco;
    }
    set stePreco(preco) {
        this.preco = preco;
    }
    get getQuantidadeEmEstoque() {
        return this.quantidadeEmEstoque;
    }
    set setQuantidadeEmEstoque(quantidadeEmEstoque) {
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
}
let cadastro = new Catalogo('Sapato', 245, 10);
console.log('O produto ' + cadastro.getNome + ' custa : ' + cadastro.getpreco + ' e o mesmo possui ' + cadastro.getQuantidadeEmEstoque + ' unidades em estoque');
