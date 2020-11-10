function palindrome(string){
    let palindromo = "";
    for (let i = string.length -1; i >= 0; i -= 1){
        palindromo += string[i];
    }
    if (string == palindromo){
        return true;
    } else {
        return false;
    }
}

function posicaoDoMaior(array){
    let bigger = array[0];
    for (let i = 0; i < array.length; i += 1){
        if (array[i] > bigger){
            bigger = array[i];
        }
    }
    for (let j = 0; j < array.length; j += 1){
        if (array[j] === bigger){
            return j;
        }
    }
}

function posicaoDoMenor(array){
    let smaller = array[0];
    for (let i = 0; i < array.length; i += 1){
        if (array[i] < smaller){
            smaller = array[i];
        }
    }
    for (let j = 0; j < array.length; j += 1){
        if (array[j] === smaller){
            return j;
        }
    }
}

function maiorNome(array){
    let bigger = array[0];
    for (let i = 0; i < array.length; i += 1){
        let word = array[i];
        if (word.length > bigger.length){
            bigger = word;
        }
        
    }
    return bigger;
}

function repetido(array){
let repetidos = [];
for (let i = 0; i < array.length; i++){

}
return repetidos;
}


function soma(num) {
    let total = 0;
    for (let i = 0; i <= num; i++){
        total += i;
    }
    return total;
}

function finalDaPalavra(word, end){

}

function numerosRomanos(algaritmo){
    let conjunto = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    if (algaritmo.length === 1){
        let resultado = conjunto[algaritmo];
        return resultado;
    }
    let numerosAntes = [];
    for (let i = 0; i < algaritmo.length; i += 1){
        let algo = algaritmo[i];
        let numeroArabico = conjunto[algo];
        numerosAntes.push(numeroArabico);
    }
    let numerosDepois = [];
    for (let j = 0; j < algaritmo.length; j += 1){
        if (numerosAntes[j] !== 0){
            if (numerosAntes[j] < numerosAntes[j+1]) {
            let elemento = numerosAntes[j+1] - numerosAntes[j];
            numerosDepois.push(elemento);
            numerosAntes.splice(j+1, 1);
            numerosAntes.splice(j, 1);
            } else {
            numerosDepois.push(numerosAntes[j]);i
            }
        }
    }
    
    let resultado = 0;
    for (let k = 0; k < numerosDepois.length; k += 1){
        resultado += numerosDepois[k];
    }
    
    return resultado;
}

