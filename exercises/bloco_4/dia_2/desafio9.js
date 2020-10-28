let array = [];

for (let i = 0; i < 25; i += 1) {
    array.push(i+1)
}

let arrayDividoPorDois = [];

for (let i = 0; i < array.length; i += 1) {
    arrayDividoPorDois.push(array[i]/2);
}
console.log(arrayDividoPorDois);