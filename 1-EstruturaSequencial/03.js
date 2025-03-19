const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
        const soma = parseFloat(num1) + parseFloat(num2);
        console.log(`A soma dos números informados é ${soma}`);
        rl.close();
    });
});

/* Explicação:

- Importação do módulo readline

    const readline = require("readline");

O readline é um módulo embutido no Node.js que permite capturar entrada do usuário via terminal.

- Criação da interface de entrada/saída

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.createInterface cria uma interface para interagir com o usuário.
input: process.stdin define a entrada como o teclado do usuário.
output: process.stdout define a saída como o console.

- Conversão para número e soma

    const soma = parseFloat(num1) + parseFloat(num2);

parseFloat(num1) e parseFloat(num2) convertem os valores de string para números decimais.
Os dois números são somados e armazenados na variável soma.
*/