/*------------ TESTE 3 - TERNOS REPETIDOS ------------ */

// Array com as cores dos ternos.
let ternos = ["A", "A", "A", "C", "C", "M", "P", "P"];
let repetido = 0;

for (let x = 0; x < ternos.length; x++) {

    // Se o terno na posição atual for igual ao da próxima posição, soma-se 1 a variável "repetido". 
    if (ternos[x] == ternos[x + 1]) {
        repetido++;
    }
}

console.log(repetido);