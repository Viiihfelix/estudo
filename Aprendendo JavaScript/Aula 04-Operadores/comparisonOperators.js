console.log("-----------------------------")
const idadeVictoria = 27;
const idadeJunior = 24;

console.log("Victoria é mais velha que Junior? ", idadeVictoria > idadeJunior);
console.log("Junior é mais velho que Victória? ", idadeJunior > idadeVictoria);

console.log("Victória é mais nova que Junior? ", idadeVictoria < idadeJunior);
console.log("Victória tem idade igual ou menor do que idade do Junior? ", idadeVictoria <= idadeJunior);

const maioridade = 18;

console.log("Victória é maior de idade? ", idadeVictoria >= maioridade);

const x = 10;
const y = 20;
const z = "10";

console.log("O número " + x + " é igual ao número " + y, x === y); // operador de igualdade estrita
console.log("O número " + x + " é igual ao número " + z, x == z); // operador de igualdade frouxa

console.log("O número " + x + " é diferente do número " + y, x !== y); // 
console.log("O número " + x + " é diferente do número " + z, x !== z); // estrito de desigualdade
console.log("O número " + x + " é diferente do número " + z, x != z); //  frouxo de desigualdade

// Sempre optem por operadores ESTRITOS ao falar de igualdade e desigualdade