// Ex. 1
const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];
  let hello = 'Hello ';

  for (const person in people) {
    let greet = hello + people[person];
    greeting.push(greet);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

// Ex. 2

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let vogais = 1;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results += vogais;
      vogais += 1;
    } else {
      results += characters[i]
    }
  }
  return results;
};


const param = 'Dayane';
const resultado = 'D1y2n3';

assert.deepStrictEqual(removeVowels(param), resultado);

//Ex. 3

const greaterThanTen = (array) => {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const param1 = [4, 10, 32, 9, 21];
const result1 = [32, 21];

assert.deepStrictEqual(greaterThanTen(param1), result1);

// Ex. 4

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
    return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const param2 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result2 = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(param2), result2);