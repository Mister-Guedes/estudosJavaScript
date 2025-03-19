const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSalario() {
    rl.question("Quanto você ganha por hora (em R$)? ", (inputSalarioHora) => {
        const salarioHora = parseFloat(inputSalarioHora);

        rl.question("Quantas horas você trabalhou no mês? ", (inputHorasTrabalhadas) => {
            const horasTrabalhadas = parseFloat(inputHorasTrabalhadas);

            const salarioBruto = salarioHora * horasTrabalhadas;

            const descontoIR = salarioBruto * 0.11;
            const descontoINSS = salarioBruto * 0.08;
            const descontoSindicato = salarioBruto * 0.05;

            const totalDescontos = descontoIR + descontoINSS + descontoSindicato;

            const salarioLiquido = salarioBruto - totalDescontos;

            console.log("\n--- Detalhes do Salário ---");
            console.log(`+ Salário Bruto : R$ ${salarioBruto.toFixed(2)}`);
            console.log(`- IR (11%) : R$ ${descontoIR.toFixed(2)}`);
            console.log(`- INSS (8%) : R$ ${descontoINSS.toFixed(2)}`);
            console.log(`- Sindicato (5%) : R$ ${descontoSindicato.toFixed(2)}`);
            console.log(`= Salário Líquido : R$ ${salarioLiquido.toFixed(2)}`);

            rl.close();
        });
    });
}

calcularSalario();
