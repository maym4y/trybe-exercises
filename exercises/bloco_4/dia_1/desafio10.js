let valorCusto = 3;
let valorVenda = 15;
let imposto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + imposto;
let lucro = valorVenda - valorCustoTotal;
if (valorCusto > 0 && valorVenda > 0){
    console.log(lucro*1000);
} else {
    console.log("Erro");
}