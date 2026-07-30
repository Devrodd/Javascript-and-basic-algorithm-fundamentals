/*

Functions / funcoes

    - trecho de código que é executado
    Somente quando solicitado (PARENTE GENTE BOA)

    - Trecho de código que pode ser reútilizado várias vezes

        [] O que é uma função e como usar
        [] Função VOID (VAZIA)
        [] FUNÇÃO com parâmetros
        [] Função return
        [] Arrow Function


*/
function digaMeunome(nome) {
    console.log(nome);
    
}

digaMeunome("Rodrigo"); //Pode ser reutilizada varias vezes

digaMeunome("carlos");

digaMeunome("Bernardo");

digaMeunome("Marcio");

// Parâmetros


// Outros exemplos
function soma(num1, num2) { 
    return num1 + num2;
    
}

const soma2 = function (num1, num2) {
    return num1 + num2;
    
}

const soma3 = (num1, num2) => {
    return num1 + num2;
}

const soma4 = (num1, num2) => num1 + num2;

const dobro1 = function (num) {
    return num * 2;
    
}

const dobro2 = num => num * 2;

// funcao que nao tem um retorno definido, por padrão retorna underfine

function mostarPreco(preco) {
    console.log("Preco = " + preco)
    
}

function areaCirculo(raio) {
        var pi = 3.14;
        return pi * raio * raio
}

// Function hoisting: função no js são "movidas" para cima pelo

teste(10);

function teste(x) {
    console.log("Teste = " * x);
    
}

// funcoes podem ser passadas como argumentos

function triplo(num) {
    return num * 3;
}

function aplicar(f, num) {
    const result = f(num);
    console.log("Resultado = " + result);
}

aplicar(triplo, 10);
aplicar(dobro, 20);

// Funçoes de alta Ordem

const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['Maria', 'Joao', 'Toinho'];

// Map

function dobro(x) {
    return x * 2;
}

function triplo(x) {
    return x * 3;
}

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = list1.map(x => x * 2);

console.log("MAP ----------------");
console.log(m1);
console.log(m2);
console.log(m3);


// Filter

function par(x) {
    return x % 2 == 0;
}

// Retornando valor par
console.log("Filter -----------------------------")

const f1 = list1.filter(par);
const f2 = list1.filter(x => x % 2 == 0);
const f3 = list1.filter(x => x > 2);

console.log(f1);
console.log(f2);
console.log(f3);

//Reduce

function sum(x , y) {
    return x + y;
}

function produto(x, y) {
    return x * y;
}

const r1 = list1.reduce(sum);
const r2 = list2.reduce(sum, 0);
const r3 = list1.reduce(produto, 1);

console.log("Reduce ----------------------");
console.log(r1);
console.log(r2);
console.log(r3);

// Function sort: 

