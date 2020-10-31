let n = 3;
let middle = (n+1) / 2;
let controlRight = middle;
let controlLeft = middle;

for (let i = 0; i < middle; i += 1) {
    let linha = "";
    for (let col = 1; col <= n; col += 1){
        if (col < controlRight || col > controlLeft){
            linha += " ";
        } else {
            linha += "*";
        }
    }
    controlRight -= 1;
    controlLeft += 1;
    console.log(linha);
}