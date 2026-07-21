const str = 'Maria silva'

console.log(`Const str = "Maria silva"`);

console.log(`toLowerCase: ${str.toLocaleLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charArt: ${str.charAt(3)}`);

console.log(`replace: ${str.replace("i", "$")}`);
console.log(`replace: ${str.replace(/i/g, "$")}`); 

console.log(`length: ${str.length}`);

console.log(`indexof: ${str.indexOf("i")}`);

console.log(`lastIndexof: ${str.lastIndexOf("i")}`);

console.log(`substring: ${str.substring(3, 9)}`);

const data = "13/10/1993";

const mes = data.substring(3, 5);
console.log(mes);


// Converter valor

const valor = "200.99";

console.log(valor);

const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);

//Converter e-mail de user:


const email = "USERMAIUSCULO@EMAIL.COM";

console.log(email);

const novoEmail = email.toLocaleLowerCase();
console.log(novoEmail);

// Função trim

console.log(`trim: ${str.trim()}`);