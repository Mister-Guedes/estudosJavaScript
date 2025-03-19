const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const limitePeso = 50;
const valorMultaPorQuilo = 4.00;

rl.question("Digite o peso de peixes (em quilos): ", (inputPeso) => {
    const peso = parseFloat(inputPeso);

    let excesso = 0;
    let multa = 0;

    if (peso > limitePeso) {
        excesso = peso - limitePeso;
        multa = excesso * valorMultaPorQuilo;
    }

    console.log(`Peso de peixes informado: ${peso.toFixed(2)} kg`);
    console.log(`Excesso de peso: ${excesso.toFixed(2)} kg`);
    console.log(`Multa a pagar: R$ ${multa.toFixed(2)}`);

    rl.close();
});
