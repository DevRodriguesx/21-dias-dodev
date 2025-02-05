// Dados do usuario / variaveis

let nomeDoUsuario = prompt("Insira seu nome")
let idadeDoUsuario = parseInt(prompt("insira sua idade"))
let alturaDoUsuario = prompt('insira sua altura')
let alturaDoUsuarioNumb = Number(alturaDoUsuario)
let pesoDoUsuario = prompt('insira seu peso')
let pesodoUsuarioNumb = Number(pesoDoUsuario)

// Calculo do ano de nascimento e o IMC

let anoDeNascimento = 2023 - idadeDoUsuario

let imcDoUsuario = 0
imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario)

// Mensagem para o usuario no console

console.log('Olá ' + nomeDoUsuario + ', você tem ' + idadeDoUsuario + ' anos, nasceu em ' + anoDeNascimento + ', tem ' +
    alturaDoUsuario + ' de altura, pesa ' + pesoDoUsuario + 'kg seu IMC é ' + imcDoUsuario + ' kg/m2.');













