const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (numero) => {
    console.log(`O número informado foi ${numero}`);
    rl.close();
});

/*
1. readline.createInterface({...}) → Cria uma interface para entrada e saída de dados via terminal.

2. rl.question("Digite um número: ", callback) → Solicita uma entrada do usuário e executa um callback com o valor digitado.

3. console.log(...) → Exibe a mensagem formatada no terminal.

4. rl.close() → Fecha a interface após capturar a entrada.
*/