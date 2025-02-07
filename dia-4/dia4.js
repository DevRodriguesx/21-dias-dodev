// Sistema de perguntas

const fome = prompt('Você está com fome? (sim/nao)')
const dinheiro = prompt('Você tem dinheiro? (sim/nao)')
const restaurante = prompt('O restaurante está aberto ou fechado? (sim/nao)')

if (fome === 'nao' || dinheiro == 'nao') {
    console.log('Hoje o jantar será em casa');
} else if (dinheiro === 'sim' && restaurante === 'sim') {
    console.log('Hoje o jantar será no seu restaurante preferido!');  
} else {
    console.log('Peça um delivery'); 
}



