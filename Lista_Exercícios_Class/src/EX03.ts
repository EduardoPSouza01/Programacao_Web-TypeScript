class Catalogo {
    private nome:string;
    private preco:number;
    private quantidadeEmEstoque:number;

    constructor(nome:string, preco:number, quantidadeEmEstoque:number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    get getNome():string{
        return this.nome;
    }

    set setNome(nome:string){
        this.setNome = nome;
    }

    get getpreco():number{
        return this.preco;
    }
    
    set stePreco(preco:number){
        this.preco = preco;
    }

    get getQuantidadeEmEstoque(){
        return this.quantidadeEmEstoque;
    }

    set setQuantidadeEmEstoque(quantidadeEmEstoque:number){
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    calcularValorTotalEmEstoque(){
        return this.preco * this.quantidadeEmEstoque;
    }

    reporEstoque(quantidade: number){
        this.quantidadeEmEstoque += quantidade;
    }
    vender(qtd:number){
        this.quantidadeEmEstoque -= qtd;
    }

}

let cadastro = new Catalogo('Sapato', 10, 10 );
cadastro.reporEstoque(50);
cadastro.vender(2);









