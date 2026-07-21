// OPERADORES JS

console.log("Operadores aritméticos");
console.log(`3 + 4 = ${3 + 4}`);
console.log(`3 - 4 = ${3 - 4}`);
console.log(`3 * 4 = ${3 * 4}`);
console.log(`19 / 5 = ${19 / 5}`);
console.log(`19 % 3 = ${ 19 % 3}`);
console.log(`3 ** 4 = ${3 ** 4}`); // ** ELeva o numero a ele


// Operadores Comparativos

console.log(`3 > 4 = ${3 > 4}`);
console.log(`3 < 4 = ${3 < 4}`);
console.log(`3 >= 4 = ${3 >= 4}`);
console.log(`19 <= 5 = ${19 <= 5}`);

// Comparadores de Igualdade ==, ===, =!, !==

console.log("3" == 3);
console.log("3" == 4);

console.log("Operadores comparativos de igualdade ");
console.log(`"" == false: ${"" == false}`);
console.log(`"" === false: ${"" === false}`);
console.log(`"17" == 17: = ${"17" == 17}`);
console.log(`"17" === 17: ${"17" === 17}`);

const x = "Maria";
const y = "Maria";
const a = new String("Maria");
const b = new String("Maria");

console.log(`const x = "Maria"`);
console.log(`const y = "Maria"`);
console.log(`const a = new String("Maria")`);
console.log(`const b = new String("Maria")`);

console.log(`x === y: ${x === y}`);
console.log(`a === b: ${a === b}`);
console.log(`typerof x: ${typeof x}`);
console.log(`typeof a: ${typeof a}`);

// Operadores Lógicos

/*

&& (E)
|| (OU)
! (NÃO)

*/

console.log("Operadores lógicos");
console.log(`(10 > 5) && (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`(10 > 5) && (10 < 20): ${(10 > 5) && (10 < 20)}`);
console.log(`(10 > 5) || (10 > 20): ${(10 > 5) || (10 > 20)}`);
console.log(`(10 < 5) || (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`!(10 > 5): ${!(10 > 5)}`);