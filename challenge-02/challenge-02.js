// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(a,b) {
	return a + b
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var soma2 = soma(3,2) + 5

// Qual o valor atualizado dessa variável?

10

// Declare uma nova variável, sem valor.

var qualquer

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function adicionar(){
    qualquer = Math.random()
    return `O valor da variável agora é ${qualquer}`
}

// Invoque a função criada acima.

console.log(adicionar())

// Qual o retorno da função? (Use comentários de bloco).

/*
    O valor da variável agora é 0.1835251192050673
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplicacao (num1, num2, num3){
    if(num1 === undefined || num2 === undefined || num3 === undefined){
        return 'Preencha todos os valores corretamente!'
    }
    return (num1 * num2 * num3 ) + 2
}
// Invoque a função criada acima, passando só dois números como argumento.

console.log(multiplicacao(2,3))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(multiplicacao(2,3,5))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 32

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function vaidacerto(n,m,s){
    if(n !== undefined && m !== undefined && s !== undefined){
        return (n + m) / s
    }else if(n !== undefined  && m !== undefined ){
        return n + m
    }else if(n !== undefined ){
        return n
    }else{
        return 'false'
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(vaidacerto( ))
//-> false
console.log(vaidacerto(10))
//-> 10
console.log(vaidacerto(10,20))
//-> 30
console.log(vaidacerto(10,15,20))
//-> 1.25