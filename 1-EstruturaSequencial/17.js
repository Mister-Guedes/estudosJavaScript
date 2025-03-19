
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const COBERTURA_POR_LITRO = 6;
const LITROS_POR_LATA = 18;
const PRECO_POR_LATA = 80.00;
const LITROS_POR_GALAO = 3.6;
const PRECO_POR_GALAO = 25.00;

rl.question("Digite o tamanho da área a ser pintada (em metros quadrados): ", (inputArea) => {
    const area = parseFloat(inputArea);

    const areaComFolga = area * 1.1;

    const litrosNecessarios = areaComFolga / COBERTURA_POR_LITRO;

    const latasApenas = Math.ceil(litrosNecessarios / LITROS_POR_LATA);
    const precoLatasApenas = latasApenas * PRECO_POR_LATA;

    const galoesApenas = Math.ceil(litrosNecessarios / LITROS_POR_GALAO);
    const precoGaloesApenas = galoesApenas * PRECO_POR_GALAO;

    const latasMisturadas = Math.floor(litrosNecessarios / LITROS_POR_LATA);
    const restante = litrosNecessarios - (latasMisturadas * LITROS_POR_LATA);
    const galoesMisturados = Math.ceil(restante / LITROS_POR_GALAO);
    const precoMisturado = (latasMisturadas * PRECO_POR_LATA) + (galoesMisturados * PRECO_POR_GALAO);

    console.log(`\n--- Detalhes da Compra ---`);
    console.log(`Área a ser pintada (com 10% de folga): ${areaComFolga.toFixed(2)} m²`);
    console.log(`Litros de tinta necessários: ${litrosNecessarios.toFixed(2)} litros`);
    console.log(`\n1. Apenas latas de 18 litros:`);
    console.log(`   Quantidade de latas: ${latasApenas}`);
    console.log(`   Preço total: R$ ${precoLatasApenas.toFixed(2)}`);
    console.log(`\n2. Apenas galões de 3,6 litros:`);
    console.log(`   Quantidade de galões: ${galoesApenas}`);
    console.log(`   Preço total: R$ ${precoGaloesApenas.toFixed(2)}`);
    console.log(`\n3. Misturar latas e galões:`);
    console.log(`   Quantidade de latas: ${latasMisturadas}`);
    console.log(`   Quantidade de galões: ${galoesMisturados}`);
    console.log(`   Preço total: R$ ${precoMisturado.toFixed(2)}`);

    rl.close();
});
