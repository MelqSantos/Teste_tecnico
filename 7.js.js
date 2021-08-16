/*------------ TESTE 7 - FIZZ BUZZ ------------ */

// Número a ser calculado.
var num = 15;

for (let x = 1; x <= num; x++) {

    // Número se for divisível por 3.
    if (x % 3 == 0) {
        console.log("Fizz");

        // Número se for divisível por 5.    
    } else if (x % 5 == 0) {
        console.log("Buzz");

        // Contagem normal.
    } else {
        console.log(x);
    }

}