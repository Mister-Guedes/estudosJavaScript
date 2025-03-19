const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const COBERTURA_POR_LITRO = 3;
const LITROS_POR_LATA = 18;
const PRECO_POR_LATA = 80.00;

rl.question("Digite o tamanho da área a ser pintada (em metros quadrados): ", (inputArea) => {
    const area = parseFloat(inputArea);

    const litrosNecessarios = area / COBERTURA_POR_LITRO;

    const latasNecessarias = Math.ceil(litrosNecessarios / LITROS_POR_LATA);

    const precoTotal = latasNecessarias * PRECO_POR_LATA;

    console.log(`\n--- Detalhes da Compra ---`);
    console.log(`Área a ser pintada: ${area.toFixed(2)} m²`);
    console.log(`Litros de tinta necessários: ${litrosNecessarios.toFixed(2)} litros`);
    console.log(`Quantidade de latas necessárias: ${latasNecessarias}`);
    console.log(`Preço total: R$ ${precoTotal.toFixed(2)}`);

    rl.close();
});