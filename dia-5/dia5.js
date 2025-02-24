// CRIANDO VARIAVEIS

let escolhaUm = Number(prompt('Escolha um número'))
let escolhaDois = Number(prompt('Escolha outro número'))
let opções = prompt('Escolha alguma das operações a seguir: +, -, x, /.')

// SWITCHCASE

switch (opções) {

    case '+':
        console.log(escolhaUm +  ' + ' + escolhaDois + ' o resultado será: ');
        console.log(escolhaUm + escolhaDois);
        break;
    case '-':
        console.log(escolhaUm +  ' - ' + escolhaDois + ' o resultado será: ');
        console.log(escolhaUm - escolhaDois);
        break;
    case 'x':
        console.log(escolhaUm +  ' x ' + escolhaDois + ' o resultado será: ');
        console.log(escolhaUm * escolhaDois);
        break;
    case '/':
        console.log(escolhaUm +  ' / ' + escolhaDois + ' o resultado será: ');
        console.log(escolhaUm / escolhaDois);
        break;
    default:
        console.log('Opção inválida');
        break;
}