function calcular() {

    var num = parseInt(document.getElementById("numero").value);
    var exibir = document.getElementById("resposta");

    // Limpa tela
    exibir.innerHTML = "";

    // Validações de entrada.
    if (num == "" || num == 0 || num < 0) {
        alert("Digite números positivos inteiros!")
    } else {

        for (let x = 1; x <= num; x++) {

            // Número for divisível por 3.
            if (x % 3 == 0) {
                exibir.innerHTML += "Fizz <br>";

                // Número divisível por 5.    
            } else if (x % 5 == 0) {
                exibir.innerHTML += "Buzz <br>";

                // Contagem normal
            } else {
                exibir.innerHTML += x + "<br>";
            }

        }
    }

}