const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPesoIdeal(altura) {
    return (72.7 * altura) - 58;
}

rl.question("Digite a sua altura em metros (ex: 1.75): ", (input) => {
    const altura = parseFloat(input);

    const pesoIdeal = calcularPesoIdeal(altura);

    console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);

    rl.close();
});
