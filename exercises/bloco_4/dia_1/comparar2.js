let a = 100;
let b = 23;
let c = 103;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c)
} else {
    console.log("Invalid input");
}