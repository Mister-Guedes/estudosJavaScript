const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o raio do círculo: ", (raio) => {
    const area = Math.PI * Math.pow(parseFloat(raio), 2);
    console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}.`);
    rl.close();
});

/* Explicação:

- parseFloat(raio)

    Converte o valor digitado pelo usuário (string) em um número decimal.

- Math.pow(parseFloat(raio), 2)

    Calcula o raio ao quadrado (R^2).
    Math.pow(base, expoente) eleva a base à potência do expoente.

- Multiplicação por Math.PI

    Multiplicamos o resultado do raio ao quadrado pelo valor de π, obtendo a área do círculo.

- area.toFixed(2)

    Formata o resultado para exibir apenas duas casas decimais no console.
*/