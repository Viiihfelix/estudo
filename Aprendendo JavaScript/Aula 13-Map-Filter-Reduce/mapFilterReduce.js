const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// MAP

// primeira forma
distanciaEmMetros.map(distancia => {
    return distancia / 1000;
});

// forma mais enxuta de escrever o código
const distanciasEmKm = distanciaEmMetros.map(distancia => distancia / 1000); // retirou as chaves e o return

console.log("Distancia em KM: ", distanciasEmKm);





// FILTER
const itensFiltrados = distanciaEmMetros.filter((distancia) => {
  if (distancia > 2000) return distancia;
});

// forma mais enxuta de escrever o código
// const itensFiltrados = distanciaEmMetros.filter((distancia) => distancia > 2000); // retirou as chaves, if e return

console.log("Itens filtrados: ", itensFiltrados);




// REDUCE

// distanciaEmMetros.reduce();

const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => { // acc significa acumulador, aqui reduziu todos os valores em apensa um
  return acc + distancia
});

console.log("Distancia Total: ", distanciaTotal);