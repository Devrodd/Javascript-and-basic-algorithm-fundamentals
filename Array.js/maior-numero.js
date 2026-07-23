// Como pegar um Elemento do HTML por id
const elem = document.getElementById("dados");
console.log(elem);


//Como pegar o conteúdo dentro de um elemento html

const conteudo = elem.innerHTML;
console.log(conteudo)

//Como recortar um string com base em um separador

const nome = "Maria silva costa";
const result = nome.split(" ")
console.log(result)


const resultado = conteudo.split("\n");
console.log(resultado)
//como converter um array de strings em um array de números

const str = "4.5";
console.log(str);

const n = Number(str);
console.log(n)

const numeros = resultado.map(x => Number(x));
console.log(numeros);


//Como mostrar um Número com arredondamento

const x = 3.456
console.log(x.toFixed(2));
