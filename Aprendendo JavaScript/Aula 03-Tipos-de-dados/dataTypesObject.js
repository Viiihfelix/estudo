/* Object:
const person = {firstName:"John", lastName:"Doe"};

Array object:
const cars = ["Saab", "Volvo", "BMW"];

Date object:
const date = new Date("2022=03-25");
*/

const fichaDaVictoria = {
    nome: "Victoria",
    idade: 27,
    profissao: "programadora",
    temFilhos: false,
};

console.log('Ficha da Victoria:', fichaDaVictoria);

console.log('Nome: ' + fichaDaVictoria.nome);

fichaDaVictoria.carro = "Yaris";

console.log('Ficha da Victoria', fichaDaVictoria);

delete fichaDaVictoria.carro;

console.log('Ficha da Victoria', fichaDaVictoria);

console.log('Carro: ' + fichaDaVictoria.carro); // undefined

/* ou, outra forma:

const nome = "Victoria";
const idade = 27;
const profissoa = "programadora";
const temFilhos = false;

const fichaDaVictoria = {
    nome,
    idade,
    profissao,
    temFilhos,
};

console.log('Ficha da Victoria', fichaDaVictoria);
*/
