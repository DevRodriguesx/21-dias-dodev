// Sistema de perguntas

let fome = prompt('Você está com fome?')
let dinheiro = prompt('Você tem dinheiro?')
let restaurante = prompt('O restaurante está aberto ou fechado?')


if (fome === 'não' && dinheiro === 'não' && restaurante === 'fechado') {
    console.log('Hoje a janta será em casa');
}
if (fome === 'não' && dinheiro === 'não' && restaurante === 'aberto') {
    console.log('Hoje a janta será em casa');

}
if (fome === 'sim' && dinheiro === 'sim' && restaurante === 'aberto') {
    console.log('Hoje o jantar será no seu restaurante preferido!');
}
if (fome === 'sim' && dinheiro === 'sim' && restaurante === 'fechado') {
    console.log('Peça um delicery!');

}


