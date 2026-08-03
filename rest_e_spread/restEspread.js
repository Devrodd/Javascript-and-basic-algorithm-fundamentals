function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Spread Operator

const numeros2 = [1, 2, 3, 4, 5];

console.log(sum(...numeros2));  


const myNumbers = [1, 2, 3];

const result3 = Math.max(...myNumbers);

console.log(result3);
