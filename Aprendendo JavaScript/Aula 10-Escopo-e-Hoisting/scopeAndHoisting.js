// Escopo

// Escopo Global
// Escopo de Bloco
// Escopo de Função

const x = 'variavel global';

// escopo de bloco
if (x){
    const z = 'variavel de bloco'
    console.log("X é:", X);
    console.log("Z é:", Z);
}

// escopo de funcao
const funcao = () => {
    const a = 'variavel do escopo da funcao'
    console.log("Na função, A é:", a);
}

funcao();

// Hoisting