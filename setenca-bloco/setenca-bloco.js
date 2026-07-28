const list1 = [1,2,3,4,5,6,7,8,9,10];

function par(x) {
    return x % 2 == 0;
}

function impar(x) {
    return x % 2 !== 0;
}
const f1 = list1.filter(par);
const f2 = list1.filter(impar);


console.log(f1);
console.log(f2);