// Entendendo funções de forma mais simples

const brinquedos = [
    "Carrinho",
    "Boneca",
    "Bola",
    "Robô"
]

// Imaginemos que existe uma caixa com varios brinquedos, e sua mae fala, "Olhe todos os briquedos da caixa"

//FOR

for (let i = 0; i < brinquedos.length; i++) {
    console.log(brinquedos[i]);
}

// MAP() => 'Transforme todos'

const numeros = [1, 2, 3, 4];

const dobro = numeros.map(numeros => numeros *2)

console.log(dobro);

// Filter() => 'Escolha apenas alguns'

const frutas = [
    "maçã",
    "banana",
    "uva",
    "banana"
]

const bananas = frutas.filter(fruta => fruta === "banana");

console.log(bananas)

// Reduce() => Junte tudo

const moedas = [1, 2, 5, 10];

const total = moedas.reduce((acc, moedas) => acc + moedas,0);

console.log(total);

// Sort() => Organize tudo

const nomes = [
     "Carlos",
    "Ana",
    "Bruno"
]

nomes.sort();

console.log(nomes);

// O sort organiza tudo que voce quiser

const numeros2 = [1, 4, 7, 20, 23, 5, 30];

numeros2.sort((a,b)=>a-b);

console.log(numeros2);

// Comparar por Tamanho

function compararPorTamanho(s1, s2) {
    return s1.length - s2.length;
}

const names = ["Rodrigo", "Ana", "João", "Pedro"];

names.sort(compararPorTamanho);

console.log(names);
console.log(compararPorTamanho("Rodrigo", "Rodrigo"))