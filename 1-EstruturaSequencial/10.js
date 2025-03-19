const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

rl.question("Digite a temperatura em graus Celsius: ", (input) => {
    const celsius = parseFloat(input);

    const fahrenheit = celsiusParaFahrenheit(celsius);
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);

    rl.close();
});
