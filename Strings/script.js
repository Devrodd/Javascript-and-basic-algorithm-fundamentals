// Neste modulo irei abordar os conceitos de strings, que são cadeias de caracteres, e como manipulá-las em JavaScript. Strings são muito utilizadas para armazenar e manipular texto em aplicações web.

// Declaração de strings
console.log('Uma string pode ser declarada usando aspas duplas.')
console.log('Uma string pode ser declarada usando aspas simples.')
console.log(`Uma string pode ser declarada usando crases.`)

console.log('Concatenando strings com o operador +: ' + 'Olá, ' + 'mundo!')

const num = 14.5
console.log('Ovalor do produto é: ' + num)
console.log('O valor do produto é: ' + num)
console.log(`O valor do produto é: ${num}`) // Usando template literals para interpolar a variável num na string

console.log('Conversão entre number e string: ')

const str1 = num.toString() // Convertendo number para string
console.log(`Tipo de ${str1} é ${typeof str1}`)

//Explicando sobre a conversão de string para number em texto
// A conversão de string para number pode ser feita utilizando a função Number() ou parseFloat() para números decimais e parseInt() para números inteiros.

const str2 = '123.45'
const num2 = Number(str2) // Convertendo string para number
console.log(`Tipo de ${num2} é ${typeof num2}`)

const str3 = '456'
const num3 = parseInt(str3) // Convertendo string para number inteiro
console.log(`Tipo de ${num3} é ${typeof num3}`)

const str4 = '789.01'
const num4 = parseFloat(str4) // Convertendo string para number decimal
console.log(`Tipo de ${num4} é ${typeof num4}`)

// Manipulação de strings
const texto = 'JavaScript é uma linguagem de programação.'

console.log(`O tamanho da string é: ${texto.length}`) // Retorna o tamanho da string
console.log(`A primeira letra da string é: ${texto.charAt(0)}`) // Retorna o caractere na posição 0
console.log(`A última letra da string é: ${texto.charAt(texto.length - 1)}`) // Retorna o último caractere

console.log(`A string em maiúsculas: ${texto.toUpperCase()}`) // Converte a string para maiúsculas
console.log(`A string em minúsculas: ${texto.toLowerCase()}`) // Converte a string para minúsculas

console.log(`A substring da posição 0 a 10 é: ${texto.substring(0, 10)}`) // Retorna a substring da posição 0 a 10
console.log(`A substring da posição 11 a 20 é: ${texto.substring(11, 20)}`) // Retorna a substring da posição 11 a 20

console.log(
  `A string substituindo 'linguagem' por 'framework': ${texto.replace('linguagem', 'framework')}`,
) // Substitui a palavra 'linguagem' por 'framework'

console.log(`A string dividida em um array de palavras: ${texto.split(' ')}`) // Divide a string em um array de palavras

console.log(
  `A string com espaços removidos no início e no fim: ${texto.trim()}`,
) // Remove espaços no início e no fim da string

console.log(`A string com espaços removidos no início: ${texto.trimStart()}`) // Remove espaços no início da string
console.log(`A string com espaços removidos no fim: ${texto.trimEnd()}`) // Remove espaços no fim da string

console.log(
  `A string com espaços removidos no início e no fim: ${texto.trim()}`,
) // Remove espaços no início e no fim da string
