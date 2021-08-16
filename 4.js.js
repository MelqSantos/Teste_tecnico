/*------------ TESTE 4 - ENCONTRANDO O E-MAIL ------------ */

// Array com os assuntos dos emails.
var emails = [
    "Bug",
    "Minha impressora esta pegando fogo",
    "tem um inseto no meu pc",
    "o site ta piscando #medo",
    "tem um bug no formulario",
    "o sistema esta bugado",
    "como faz um for em java?",
    "Ja resolveu o Bug do Aplicativo?"
]

// Método para deixar os valores do array em letra maiúscula para facilitar a busca.
var upper = emails.map(mail => mail.toUpperCase());

// Palavra a ser buscada na lista dos e-mails.
var PATTERN = "BUG",
    // Filtragem no array
    filtered = upper.filter(function(str) { return str.includes(PATTERN); })

// Impressão do resultado.
for (let x = 0; x < filtered.length; x++) {
    console.log(filtered[x]);
}