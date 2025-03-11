// informações do usuario

let nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')
let temCartaDeMotorista = prompt('Voce possui carteira de motorista? (sim/nao)')
let temCarro = prompt('Voce possui algum carro? (sim/nao)')

// Mensagens para o usuario

if (idade < 18 || temCartaDeMotorista === 'nao') {
    console.log(nome + ', você não pode dirigir');   
} else if (temCartaDeMotorista === 'sim' && temCarro === 'sim') {   
    console.log(nome + ', você será o motorista!'); 
} else {
    console.log(nome + ', você pode dirigir mas não tem um carro');
    
}




