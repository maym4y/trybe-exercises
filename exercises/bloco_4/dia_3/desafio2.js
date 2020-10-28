let n = 5;

for (let index = 1; index <= n; index += 1) {
    let linha = "";
    
    for (let jindex = 0; jindex < index; jindex +=1){
        linha += "*";
    }
    console.log(linha);
}