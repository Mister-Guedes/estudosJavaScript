const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o tamanho do arquivo para download (em MB): ", (inputTamanhoArquivo) => {
    const tamanhoArquivo = parseFloat(inputTamanhoArquivo);

    rl.question("Digite a velocidade do link de Internet (em Mbps): ", (inputVelocidade) => {
        const velocidadeInternet = parseFloat(inputVelocidade);

        const tempoEmSegundos = (tamanhoArquivo * 8) / velocidadeInternet;
        const tempoEmMinutos = tempoEmSegundos / 60;

        console.log(`\n--- Tempo Aproximado de Download ---`);
        console.log(`Tamanho do arquivo: ${tamanhoArquivo.toFixed(2)} MB`);
        console.log(`Velocidade da Internet: ${velocidadeInternet.toFixed(2)} Mbps`);
        console.log(`Tempo aproximado de download: ${tempoEmMinutos.toFixed(2)} minutos`);

        rl.close();
    });
});
