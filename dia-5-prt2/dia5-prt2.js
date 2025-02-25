// CRIANDO VARIAVEIS

let opções = prompt('O que você deseja:' + '\n1 = abastecer com gasolina; \n2 = abastecer com álcool; \n3 = calibrar os pneus.')

// SWITCHCASE

switch (opções) {

    case '1':
        let valor = parseInt(prompt('Qual será o valor?'))
        console.log('A quantidade abastecida de gasolina foi de: ' + (valor / 5 + ' litros'))
        break;
    case '2':    
        let valor2 = parseInt(prompt('Qual será o valor?'))
        console.log('A quantidade abastecida de álcool foi de: ' + (valor2 / 3 + ' litros.'))
        break;
    case '3':
        console.log('pneus calibrados com sucesso!');
        break;
    default:
        console.log('Você não escolheu nenhuma opção.');
        break;
}