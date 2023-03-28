function calcular() {
    function verificaFibonacci(num) {
        let a = 0;
        let b = 1;
        let c = 0;

        while (c < num) {
            c = a + b;
            a = b;
            b = c;
        }

        if (c === num) {
            return true;
        } else {
            return false;
        }
    }

    function calculaFibonacci(num) {
        let sequencia = [0, 1];
        
        for (let i = 2; sequencia[i-1] <= num; i++) {
          sequencia[i] = sequencia[i-1] + sequencia[i-2];
        }
      
        return sequencia.slice(0, -1);
    }

    let saida = document.getElementById('saida');

    let numero = parseInt(prompt("Digite um número para verificar se faz parte da sequência de Fibonacci: "));

    if (numero !== null) {
        numero = parseInt(numero);
      
        if (isNaN(numero)) {
            saida.innerHTML = `<p class="result">Insira um número válido para calcular !!!</p>`;
        } else {
            let sequencia = calculaFibonacci(numero);

            if (verificaFibonacci(numero)) {
                saida.innerHTML = ` <p class="result">O número <span>${numero}</span> faz parte da sequência de Fibonacci!</p>
                                    <p class="result">A sequência de Fibonacci até o número <span>${numero}</span> é: <span>${sequencia.join(", ")}</span></p>`;
            } else {
                saida.innerHTML = `<p class="result">O número <span>${numero}</span> não faz parte da sequência de Fibonacci.</p>`;
            }
        }
    }
}