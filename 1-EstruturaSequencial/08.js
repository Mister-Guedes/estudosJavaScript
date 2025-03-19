const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quanto você ganha por hora? ", (valorHora) => {
    rl.question("Quantas horas você trabalhou no mês? ", (horasTrabalhadas) => {
        const salario = parseFloat(valorHora) * parseFloat(horasTrabalhadas);
        console.log(`O total do seu salário no mês é R$ ${salario.toFixed(2)}.`);
        rl.close();
    });
});
