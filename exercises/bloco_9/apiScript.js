// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => joke = data.joke)
    .then((joke) => {
      const h2 = document.querySelector('h2');
      h2.innerHTML = joke;
    })
    .catch(() => alert('An Error Has Ocurred'));

  const promise = new Promise((resolve, reject) => {
    let array = [];
    for (let i = 0; i < 10; i += 1) {
      let numb = Math.random() * 50;
      array.push(Math.round(numb * 100) / 100);
    }
    let sumOfNums = array.map(each => Math.pow(each, 2)).reduce((acc, num) => acc += num);
    
    if (sumOfNums >= 8000) {
      return reject;
    }
    resolve(sumOfNums)
  })
    .then(response => console.log(response))
    .then(response => console.log([2, 3, 5, 10].map(div => response / div)))
    .then(array => console.log(array.reduce((acc, num) => acc += num)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

window.onload = () => fetchJoke();
