const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fahrenheitParaCelsius(fahrenheit) {
    return 5 * ((fahrenheit - 32) / 9);
}

// Solicita a entrada do usuário
rl.question("Digite a temperatura em graus Fahrenheit: ", (input) => {
    const fahrenheit = parseFloat(input);
    const celsius = fahrenheitParaCelsius(fahrenheit);
    console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)}°C`);
    rl.close();
});
