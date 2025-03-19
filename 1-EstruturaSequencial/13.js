const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pesoIdealHomens(altura) {
    return (72.7 * altura) - 58;
}

function pesoIdealMulheres(altura) {
    return (62.1 * altura) - 44.7;
}

rl.question("Digite a sua altura em metros (ex: 1.75): ", (inputAltura) => {
    const altura = parseFloat(inputAltura);

    rl.question("Você é homem ou mulher? (digite 'homem' ou 'mulher'): ", (inputGenero) => {
        if (inputGenero.toLowerCase() === "homem") {
            const pesoIdeal = pesoIdealHomens(altura);
            console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
        } else if (inputGenero.toLowerCase() === "mulher") {
            const pesoIdeal = pesoIdealMulheres(altura);
            console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
        } else {
            console.log("Gênero inválido. Por favor, digite 'homem' ou 'mulher'.");
        }
        rl.close();
    });
});
