let n = 5;

for (let index = 1; index <=n; index += 1) {
    let linha = "";
    let j;
    for (j = 0; j < n - index; j += 1){
        linha += " ";
    }
    for (let k = 0; k < index; k += 1) {
        linha += "*";
    }
    console.log(linha);
}