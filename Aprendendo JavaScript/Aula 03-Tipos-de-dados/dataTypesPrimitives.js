/* 

Numbers: numeros
let length = 16;
let weight = 7,5;

Strings: texto
let color = "Yellow";
let lastName = "Johnson";

Booleans: V ou F
let x = true;
let y = false;

Undefined: nao foi atribuido nenhum valor

Null: nulo, ausencia de valor
*/

const nome = "Victoria"; // (Strings)
const idade = 27; // (Numbers)
let temCabeloCurto = true; // (Booleans)
console.log("Victoria tem cabelo curto? ", temCabeloCurto);

console.log("5 meses depois... ");

temCabeloCurto = false;
console.log("Victoria tem cabelo curto? ", temCabeloCurto);

let profissao; // (Undefined)
console.log(profissao);

profissao = "programadora";
console.log(profissao);

let carro = "Yaris";
console.log("Qual o carro da Victoria? ", carro);

console.log("1 ano depois... ");

carro = "Tracker";
console.log("Qual o carro da Victoria? ", carro);

console.log("2 anos depois... ");

carro = null; // (Null)