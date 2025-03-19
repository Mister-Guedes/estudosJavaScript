const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular() {
    rl.question("Digite o primeiro número inteiro: ", (input1) => {
        const inteiro1 = parseInt(input1);

        rl.question("Digite o segundo número inteiro: ", (input2) => {
            const inteiro2 = parseInt(input2);

            rl.question("Digite o número real: ", (input3) => {
                const numeroReal = parseFloat(input3);

                const resultadoA = (2 * inteiro1) * (inteiro2 / 2);

                const resultadoB = (3 * inteiro1) + numeroReal;

                const resultadoC = Math.pow(numeroReal, 3);

                console.log(`a. O produto do dobro do primeiro com metade do segundo: ${resultadoA}`);
                console.log(`b. A soma do triplo do primeiro com o terceiro: ${resultadoB}`);
                console.log(`c. O terceiro elevado ao cubo: ${resultadoC}`);

                rl.close();
            });
        });
    });
}

calcular();
