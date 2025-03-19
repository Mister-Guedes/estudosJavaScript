const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o lado do quadrado: ", (lado) => {
    const area = Math.pow(parseFloat(lado), 2);
    const dobroArea = area * 2;
    console.log(`A área do quadrado é ${area.toFixed(2)} e o dobro da área é ${dobroArea.toFixed(2)}.`);
    rl.close();
});
