
function imprimir(){ // essa função é sem parâmetros, e sem retorno
    console.log("Olá Mundo");
}

imprimir();

// dando mais funcionalidade
function imprimir(impressao){ 
    console.log(impressao);
}

imprimir("Olá Mundo");
/*
// ou
const valor1 = 2;
const valor2 = 3;
imprimir(`A soma entre ${valor1} e ${valor2} é: ${calcularSoma(valor1, valor2)}`);
*/

// jeito 1
/*function calcularSoma(valor1, valor2){
    console.log(`A soma entre ${valor1} e ${valor2} é: ${valor1 + valor2}`);
}

calcularSoma(2, 3);
calcularSoma(5, 6);
*/

// jeito 2
/*function calcularSoma(valor1, valor2){
    return valor1 + valor2;
}

console.log(calcularSoma(2, 4));

// ou
console.log(`A soma entre 2 e 3 é: ${calcularSoma(2, 3)}`);

// ou, pra deixar o codigo mais limpo
const valor1 = 2;
const valor2 = 3;
console.log(`A soma entre ${valor1} e ${valor2} é: ${calcularSoma(valor1, valor2)}`);
*/

// agora, para evitar hoisting, comportamento do JS de "levantar" declarações para o topo do código.
// atribui a função a const, chama-se expressão de funções, mais seguro

/*
const imprimir = function imprimir(impressao){
    // para não ficar redundante, pode-se remover o imprimir da função...
    // ... ficando const imprimir = funtion (impressao); não vai dar problema 
    console.log(impressao);
}

imprimir("Olá Mundo");
*/

// ou

/*
const valor1 = 2;
const valor2 = 3;

const calcularSoma = function(valor1, valor2){
    return valor1 + valor2;
}  

imprimir(`A soma entre ${valor1} e ${valor2} é: ${calcularSoma(valor1, valor2)}`);

*/