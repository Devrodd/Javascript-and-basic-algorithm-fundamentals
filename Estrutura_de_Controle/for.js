for (let i = 0; i < 5; i++) {
    console.log(`I = ${i}`);
    
}

// Imaginamos que queremos escrever olá cinco vezes

/* sem for ficaria 
console.log("Olá");
console.log("Olá");
console.log("Olá");
console.log("Olá");
console.log("Olá");
*/

// com for ficaria desta forma mais simples

for (let i = 1; i <= 5; i++) {
    console.log("Olá");
}

//Breve explicação do for por cada etapa!

// O FOR TEM 3 PARTES

// let i = 1 'comece no numero 1 ou na casa 1 ou zero se for um vetor'
// i <= 5 'enquanto i for menor ou igual a 5, continue..., Quando chega no 6 ele para'
// i++ depois de cada volta, ande uma casa, é igual a escrever: i = i +1;

/* Ou seja 
    1

    ↓

    2

    ↓

    3

    ↓

    4

    ↓

    5

*/

const alunos = ["ANA", "JO", "MARIA", "PEDRO"];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]); // i < alunos.length = alunos.verique quantos alunos tem
}