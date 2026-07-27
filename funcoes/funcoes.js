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
function digaMeunome() {
    const name = 'Rodrigo'
    console.log(name)
    
}

digaMeunome() //Pode ser reutilizada varias vezes






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

