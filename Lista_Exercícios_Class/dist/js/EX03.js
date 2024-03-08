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
    calcularValorTotalEmEstoque() {
        return this.preco * this.quantidadeEmEstoque;
    }
    reporEstoque(quantidade) {
        this.quantidadeEmEstoque += quantidade;
    }
    vender(qtd) {
        this.quantidadeEmEstoque -= qtd;
    }
}
let cadastro = new Catalogo('Sapato', 10, 10);
cadastro.reporEstoque(50);
cadastro.vender(2);
