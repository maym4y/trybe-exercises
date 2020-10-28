let n = 5;

for (let index = 0; index < n; index += 1) {
    let linha = "";

    for (let jindex = 0; jindex < n; jindex +=1){
        linha += "*";
    }
    console.log(linha);
}