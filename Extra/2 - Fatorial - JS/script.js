function calcular() {

    var fatorial = parseInt(document.getElementById("numero").value);
    var exibir = document.getElementById("resposta");

    var resultado = 1;

    // Formatação para mostrar qual número será calculado.
    exibir.innerHTML = "<strong>" + fatorial + "<strong>! = ";


    // Validações de entrada
    if (fatorial == 0 || fatorial == "" || fatorial < 0) {

        alert("Digite números positivos inteiros!")

        // Mudança de formatação caso o número a ser calculado seja maior que 15.
    } else if (fatorial > 15) {
        for (var i = 1; i <= fatorial; i++) {
            exibir.innerHTML = fatorial + "! = " + resultado;
            resultado = resultado * i;
        }
    } else {

        // Formatação mostrando o cálculo completo.
        for (var i = 1; i <= fatorial; i++) {
            if (i == fatorial) {
                exibir.innerHTML += i;
            } else {
                exibir.innerHTML += i + ".";
                resultado = resultado * i;
            }
        }

        // Concatenação do resultado no cálculo.
        exibir.innerHTML += " = <strong>" + resultado + "</strong>";
    }


}