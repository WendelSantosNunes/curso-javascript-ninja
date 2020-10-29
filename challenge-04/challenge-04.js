// # Desafio da semana #4


/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function ( a ){
    return a ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(null)
isTruthy(false)
isTruthy(0)
isTruthy(-0)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(-1)
isTruthy(2)
isTruthy(3)
isTruthy('1')
isTruthy('Wendel')
isTruthy(5)
isTruthy(6)
isTruthy(7)
isTruthy([])
isTruthy({})

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'Toyota',
    modelo: 'Toyota Corolla',
    placa: 'FXR - 9915',
    ano: 2020,
    cor:'azul',
    quantosPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function( cor ){
    carro.cor = cor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function(){
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

var obterMarcaModelo = function () {
    return 'Esse carro é um ' + carro.obterMarca() +' '+ carro.obterModelo()
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionar = function ( numerosPessoas ){
    var totalPessoas = carro.quantidadePessoas + numerosPessoas

    if(totalPessoas === carro.assentos){
        carro.quantidadePessoas += numerosPessoas
        return 'O carro já está lotado!'
    } 

    if(totalPessoas > carro.assentos){
        var pessoas = carro.assentos - carro.quantidadePessoas
        var plura = pessoas === 1 ? ' pesssoa': ' pessoas' 
        return 'Essa quantidade Passou do limite possível de pessoa dentro no carro, por favor, adicione só ' + pessoas + plura + '.'
    }

    carro.quantidadePessoas += numerosPessoas

    if((carro.assentos - totalPessoas) === 1 ){
        return 'Só cabem mais '+ (carro.assentos - totalPessoas) +' pessoa!'
    }
    
    if((carro.assentos - totalPessoas) >= 2 ){
        return 'Só cabem mais '+ (carro.assentos - totalPessoas) +' pessoas!'
    }
    
}  

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
*/

// Qual a cor atual do carro?

console.log(carro.cor) // azul

// Mude a cor do carro para vermelho.

carro.cor = 'vermelho'

// E agora, qual a cor do carro?

console.log(carro.cor) // vermelho

// Mude a cor do carro para verde musgo.

carro.cor = 'verde musgo'

// E agora, qual a cor do carro?

console.log(carro.cor) // verde musgo 

// Qual a marca e modelo do carro?

console.log(carro.modelo) // Toyota Corolla

// Adicione 2 pessoas no carro.

console.log(carro.adicionar(2)) // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.

console.log(carro.adicionar(4)) // Passou do limite de possível de pessoa no carro, por favor, adicione só 3 pessoas.

// Faça o carro encher.

console.log(carro.adicionar(3)) // O carro já está lotado!

// Tire 4 pessoas do carro.

console.log(carro.adicionar(-4))// Só cabem mais 4 pessoas!

// Adicione 10 pessoas no carro.

console.log(carro.adicionar(10)) // Passou do limite de possível de pessoa no carro, por favor, adicione só 4 pessoas.

// Quantas pessoas temos no carro?

console.log(carro.quantidadePessoas)// 1