# Lista de Exercícios Funções

## Exercício 1
 <p>Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos (Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma instância de Carro
</p>

### [Resolução Exercício 1](./src/EX01.ts)

 ## Exercício 2
<p> Desenvolva uma classe Calculadora em TypeScript </p>

Crie uma classe Calculadora que encapsula funcionalidades matemáticas básicas. Esta classe deve possuir os seguintes requisitos:

<ul>
    <li>Dois atributos numéricos (valor1 e valor2) para armazenar os operandos das operações.  </li>
    <li>Um construtor que aceite dois números como parâmetros e os atribua aos respectivos atributos. </li>
    <li> Métodos para realizar as seguintes operações matemáticas: 
        <ul>
            <li>Soma: retorna a adição dos dois valores.  </li>
            <li>Subtração: retorna a diferença entre os dois valores.  </li>
            <li> Multiplicação: retorna o resultado da multiplicação dos dois valores</li>
            <li>Divisão: retorna o resultado da divisão do primeiro valor pelo segundo valor. Atenção: evite divisões por zero. </li>
            <li>Porcentagem: retorna a porcentagem do primeiro valor em relação ao segundo valor.</li>
            <li> Getters e Setters</li>
        </ul>
    </li>
</ul>

<p>Certifique-se de que a classe lida corretamente com situações de erro, como a divisão por zero.</p>

### [Resolução Exercício 2](./src/EX02.ts)


## Exercício 3

 <p>Crie uma classe Produto que represente um item disponível em um catálogo de uma loja virtual. A classe deve ter as seguintes características:
</p>

 <p>Atributos</p>
 
 <ul>
    <li>nome: uma string que representa o nome do produto.</li>
    <li>preco: um número que representa o preço do produto.</li>
    <li>quantidadeEmEstoque: um número inteiro que indica a quantidade disponível em estoque do produto.</li>
</ul>

 <p>Construtor</p>

<ul>
    <li>Deve aceitar três parâmetros: nome, preco e quantidadeEmEstoque, e atribuí-los aos respectivos atributos da classe</li>
</ul>

 <p>Métodos:</p>

<ul>
    <li>calcularValorTotalEmEstoque(): retorna o valor total em estoque do produto, calculado multiplicando o preço pelo quantidade em estoque</li>
    <li>reporEstoque(quantidade: number): adiciona a quantidade especificada ao estoque do produto.</li>
    <li>vender(quantidade: number): remove a quantidade especificada do estoque do produto. Se a quantidade desejada for maior do que a disponível em estoque, deve ser lançado um erro indicando que não há estoque suficiente</li>
    <li>Getters e Setters</li>
</ul>

 <p>Certifique-se de que a classe lida corretamente com situações de erro, como tentar vender mais produtos do que há em estoque. Teste todos os métodos.</p>

### [Resolução Exercício 3](./src/EX03.ts)

