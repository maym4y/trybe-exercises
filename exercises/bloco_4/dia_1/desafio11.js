let salario = 3500;
let aliquotaINSS1 = 0.08;
let aliquotaINSS2 = 0.09;
let aliquotaINSS3 = 0.11;
let aliquotaINSSfixa = 570.88;

if (salario <= 1556.94) {
    salario = salario - (salario * aliquotaINSS1);
} else if (salario <= 2594.92) {
    salario = salario - (salario * aliquotaINSS2);
} else if (salario <= 5189.82) {
    salario = salario - (salario * aliquotaINSS3);
} else if (salario > 5189.82) {
    salario = salario - aliquotaINSSfixa;
}

let aliquotaIR = 0.075;
let deducaoIR = 142.80;
let aliquotaIR2 = 0.15;
let deducaoIR2 = 354.80;
let aliquotaIR3 = 0.225;
let deducaoIR3 = 636.13;
let aliquotaIR4 = 0.275;
let deducaoIR4 = 869.36;

if (salario <= 1903.98) {
    console.log("Isento de imposto de renda");
} else if (salario <= 2826.65) {
    salario = salario - (salario * aliquotaIR) + deducaoIR;
} else if (salario <= 3751.05) {
    salario = salario - (salario * aliquotaIR2) + deducaoIR2;
} else if (salario <= 4664.68) {
    salario = salario - (salario * aliquotaIR3) + deducaoIR3;
} else if (salario > 4664.68) {
    salario = salario - (salario * aliquotaIR4) + deducaoIR4;
}

console.log("O salário liquido é " + salario);