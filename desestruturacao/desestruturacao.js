/*
ssa é uma das funcionalidades mais úteis do JavaScript. E a boa notícia é que o nome "desestruturação" assusta mais do que o conceito.

Pense na palavra:

Desestruturação = desmontar uma estrutura.

Ou seja:

Você tem uma caixa com várias coisas dentro e quer tirar cada coisa da caixa sem precisar abrir uma por uma.

Imagine uma mochila 🎒

Dentro da mochila tem:

📚 Livro
✏️ Lápis
💻 Notebook

A mochila é o array.

*/

const mochila = ["Livro", "Lápis", "Notebook"];

// Sem desestruturação
const livro = mochila[0];
const lapis = mochila[1];
const notebook = mochila[2];

console.log(livro);
console.log(lapis);
console.log(notebook);

// Com desestruturação
const [livro2, lapis2, notebook2] = mochila;

console.log(livro2);
console.log(lapis2);
console.log(notebook2);

const numeros = [1, 2, 3, 4, 5];

// Sem desestruturação
const primeiro = numeros[0];
const segundo = numeros[1];
const terceiro = numeros[2];

console.log(primeiro);
console.log(segundo);
console.log(terceiro);

// Com desestruturação
const [primeiro2, segundo2, terceiro2] = numeros;

console.log(primeiro2);
console.log(segundo2);
console.log(terceiro2);

// ignorar elementos
const [um, , tres] = numeros;

console.log(um);
console.log(tres);

// rest Operador

const [um2, ...resto] = numeros;

console.log(um2);
console.log(resto);

// Desestruturação de objetos
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

// Sem desestruturação
const nome = pessoa.nome;
const idade = pessoa.idade;
const cidade = pessoa.cidade;

console.log(nome);
console.log(idade);
console.log(cidade);

// Com desestruturação
const { nome: nome2, idade: idade2, cidade: cidade2 } = pessoa;

console.log(nome2);
console.log(idade2);
console.log(cidade2);

// Desestruturação com valores padrão
const { nome: nome3, idade: idade3, profissao = "Desconhecida" } = pessoa;

console.log(nome3);
console.log(idade3);
console.log(profissao);

// Mudando nome de variavel

const { nome: nome4, idade: idade4, cidade: cidade4 } = pessoa;

console.log(nome4);
console.log(idade4);
console.log(cidade4);

// Desestruturação de parâmetros de função
function mostrarPessoa({ nome, idade, cidade }) {
  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Cidade: ${cidade}`);
}

mostrarPessoa(pessoa);  

