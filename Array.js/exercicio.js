const elem = document.getElementById("dados");
console.log(elem);

const conteudo = elem.innerHTML
console.log(conteudo);

const numeros = conteudo.split("\n").map(Number);

let maior = numeros[0];

for (const numero of numeros){
    if (numero > maior) {
        maior = numero;

    }
}

console.log(maior);