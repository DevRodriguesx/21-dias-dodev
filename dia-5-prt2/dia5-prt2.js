// CRIANDO VARIAVEIS

let opções = prompt('O que você deseja:' + '\n1 = abastecer com gasolina; \n2 = abastecer com álcool; \n3 = calibrar os pneus.')
let quantidade
let valor 
// SWITCHCASE

switch (opções) {

    case '1':
        valor = parseInt(prompt('Qual será o valor?'))
        quantidade = valor / 5
        console.log('A quantidade abastecida de gasolina foi de: ' + quantidade + ' litros')
        break;
    case '2':    
        valor = parseInt(prompt('Qual será o valor?'))
        quantidade = valor / 3 
        console.log('A quantidade abastecida de álcool foi de: ' + quantidade + ' litros.')
        break;
    case '3':
        console.log('pneus calibrados com sucesso!');
        break;
    default:
        console.log('Você não escolheu nenhuma opção.');
        break;
}