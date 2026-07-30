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
