const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor em metros: ", (metros) => {
    const centimetros = parseFloat(metros) * 100;
    console.log(`${metros} metros equivalem a ${centimetros} centímetros.`);
    rl.close();
});
