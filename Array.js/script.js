// O básico que precisamos saber sobre arrays

const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;

console.log(t1);

// Remover elementos do array

const nomes = ["Maria", "joao", "mateus", "Paulo"];
const r1 = nomes.pop();
const r2 = nomes.shift();

console.log("Teste pop");
console.log(r1);
console.log(r2);
console.log(nomes);


// Inserir Elementos

const alturas = [1.64, 1.98, 1.66, 1.76];
alturas.push(1.90);
alturas.unshift(1.58);

console.log("Teste push e unshift");
console.log(alturas);


// Inserir ou remover em qualquer parte do código

const letras = ["A", "B", "C", "D"];

letras.splice(2, 3, "X", "Y");
console.log("Teste de splice");
console.log(letras);

// Concatenar Arrays

const meninas = ["Maria", "Ana"];
const meninos = ["Mateus", "andre"];


const todos = meninas.concat(meninos);
console.log("teste concat");
console.log(todos)


// possição ou Atribuição

const idades = [20, 32, 26, 14, 87];
idades[1] = 38;
console.log("Teste de acesso e atribuição ");
console.log(idades);

// Percorrer um array

const frutas = ["Banana", "Laranja", "Uva"];

console.log("Percorrer um Array");
for (let i=0; i<frutas.length; i++) {
    console.log(frutas[i]);
}

// Percorrer Array com FOR EACH

console.log("Percorrer um Array com FOR EACH ")
frutas.forEach(item => {
    console.log(item);
})