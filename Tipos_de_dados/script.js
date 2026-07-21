const x = 10

if (x > 0) {
  var a = 100
  let b = 200
  const c = 300
  console.log('Valores atribuídos dentro do bloco if:')
  console.log(a)
  console.log(b)
  console.log(c)
}

console.log('Valor de a fora do bloco if:') // A variável 'a' é acessível fora do bloco if
// console.log('Valor de b fora do bloco if:', b) // A variável 'b' não é acessível fora do bloco if
// console.log('Valor de c fora do bloco if:', c) // A variável 'c' não é acessível fora do bloco if

console.log(a)
//console.log(b)
//console.log(c)

// difereça de usar var e let/const é que var tem escopo de função, enquanto let e const têm escopo de bloco. Isso significa que variáveis declaradas com var podem ser acessadas fora do bloco em que foram definidas, enquanto variáveis declaradas com let e const não podem.

console.log('imprimindo resultado do for: ')

for (var i = 0; i < 5; i++) {
  console.log(i)
}

console.log('Valor de i fora do for: ' + i) // A variável 'i' é acessível fora do loop for, pois foi declarada com var

for (let j = 0; j < 5; j++) {
  console.log(j)
}

// console.log("Valor de j fora do for: " + j); // A variável 'j' não é acessível fora do loop for, pois foi declarada com let
