const assert = require('assert');
// escreva a função addOne aqui
function addOne(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1){
    let addeado = arr[i] + 1;
    newArr.push(addeado);
  }
  return newArr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);


// escreva a função wordLengths aqui
const wordLengths = (string) => {
  let out = [];
  for (let i = 0; i < string.length; i += 1) {
    out.push(string[i].length);
  }
  return out;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expecteD = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const outpuT = wordLengths(words);
assert.deepStrictEqual(outpuT, expecteD);


// escreva a função addAllnumbers aqui
const addAllnumbers = (array) => {
  let outp = 0;
  for (let i = 0; i < array.length; i += 1) {
    outp += array[i];
  }
  return outp;
}

const num = [9, 23, 10, 3, 8];
const esperado = 53;
const saida = addAllnumbers(num);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(saida, esperado);


// escreva a função findTheNeedle aqui
const findTheNeedle = (palavras, agulha) => {
  for (let i = 0; i < palavras.length; i += 1) {
    if (palavras[i] === agulha) {
      return i;
    }
  }
  return -1;
}

let wordS = ['house', 'train', 'slide', 'needle', 'book'];
let expectED = 3;
let outpUT = findTheNeedle(wordS, 'needle');
assert.strictEqual(outpUT, expectED);

wordS = ['plant', 'shelf', 'arrow', 'bird'];
expectED = 0;
outpUT = findTheNeedle(wordS, 'plant');
assert.strictEqual(outpUT, expectED);

wordS = ['plant', 'shelf', 'arrow', 'bird'];
expectED = -1;
outpUT = findTheNeedle(wordS, 'plat');
assert.strictEqual(outpUT, expectED);
