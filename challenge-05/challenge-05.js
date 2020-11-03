/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [5,10,'Wendel',20,'Legal']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retorna(array) {
    return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retorna(arr)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function param(arr,num) {
    return arr[num]    
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr2 = [1,'Wendel',true,[1,2,3],obj = {}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(param(arr2,0))
console.log(param(arr2,1))
console.log(param(arr2,2))
console.log(param(arr2,3))
console.log(param(arr2,4))

// Ou

arr2.forEach(e => console.log(e))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeDoLivro){
    var livros = {
        ninja: {
            quantidadePaginas: 42,
            autor: 'Dark',
            editora: 'udemy'
        },
        HarryPotter: {
            quantidadePaginas: 350,
            autor: 'Juliana',
            editora: 'Brasil'
        },
        Anne: {
            quantidadePaginas: 150,
            autor: 'Seila',
            editora: 'Disney'
        }
    }
    return livros[nomeDoLivro] || livros // lembrando que um array na verdade é um objeto
    //Ou
    return !nomeDoLivro ? livros : livros[nomeDoLivro]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'ninja'
console.log('O livro '+ livro +' tem '+ book(livro).quantidadePaginas + ' páginas!')


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var livro2 = 'HarryPotter'
console.log('O autor do livro '+ livro2 +' é ' + book(livro2).autor +' .')


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

livro3 = 'Anne'
console.log('O livro '+ livro3 + ' foi publicado pela editora '+ book(livro3).editora +' .')
