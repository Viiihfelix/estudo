const notasFinais = [
    {nome: "Victoria", nota: 5},
    {nome: "Dani", nota: 7},
    {nome: "Sarah", nota: 10},
    {nome: "Tayná", nota: 5},
]

/*
// MÉTODO FOR
for (let i = 0; i < notasFinais.length; i++) {
    if (notasFinais[i].nota >= 6) {
        console.log(`O aluno ${notasFinais[i].nome} está aprovado com ${notasFinais[i].nota}`)
    } else {
        console.log(`O aluno ${notasFinais[i].nome} está reprovado com ${notasFinais[i].nota}`)
    }
}

// MÉTODO FOR OF
for (let aluno of notasFinais) {
    if (aluno.nota >= 6){
        console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
    } else {
        console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`)
    }
}
*/

// MÉTODO FOR EACH
notasFinais.forEach((aluno) => {
    if (aluno.nota >= 6) {
        console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
    } else {
        console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`)
    }
});