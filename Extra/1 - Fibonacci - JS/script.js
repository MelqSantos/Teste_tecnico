function fibonacci() {

    var valor = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resposta");

    // Validação para impedir entrada de números maiores que 46 e números negativos.
    if (valor > 46 || valor < 0) {
        alert("Digite números positivos menores que 46!")
    } else {

        var anterior = 0;
        var atual = 1;
        var proximo = 1;

        // Limpar tela e imprimir as sequencias iniciais (0 e 1).
        resultado.innerHTML = "";
        resultado.innerHTML += 0 + " ";
        resultado.innerHTML += 1 + " ";

        for (let x = 0; x < (valor - 2); x++) {

            resultado.innerHTML += proximo + " ";
            anterior = atual + proximo;
            atual = proximo;
            proximo = anterior;
        }
    }
}