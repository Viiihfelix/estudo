const listaDeConvidados = ["Dani", "Jéssica", "Junior", "Tayná"];

// Push  /  Pop  /  Shift  /  Unshift

listaDeConvidados.pop(); // remove o ultimo item do array

listaDeConvidados.push("Sarah"); // adiciona no final do array
listaDeConvidados.unshift("Victória"); // adiciona como 1° do array
listaDeConvidados.shift(); // remove o primeiro item da lista

console.log(listaDeConvidados);
console.log("Dani está na lista? ", listaDeConvidados.includes("Dani")); // verifica se o item esta dentro do array