// variaveis

let nome = ""
let idade = 0
let altura = 0
let peso = 0

// dados do usuario

nome = prompt('Insira seu nome: ')
idade = parseInt(prompt('insira sua idade: '))
altura = parseFloat(prompt('insira sua altura: '))
peso = parseInt(prompt('insira seu peso: '))

// Calculo do ano de nascimento e o IMC

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

// Mensagem para o usuario no console

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNasc + ', tem ' +
    altura + ' de altura, pesa ' + peso + 'kg seu IMC é ' + imc + ' kg/m2.');













