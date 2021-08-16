/*------------ TESTE 1 - FIBONACCI ------------ */

// Valor considerado para a sequência.
var valor = 6

var anterior = 0;
var atual = 1;
var proximo = 1;

for (let x = 0; x <= (valor - 2); x++) {

    if (x < 1) {
        console.log(0);
        console.log(1);

    } else {
        console.log(proximo)
        anterior = atual + proximo;
        atual = proximo;
        proximo = anterior;
    }
}