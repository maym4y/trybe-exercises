let pecaDeXadrez = "King";

if (pecaDeXadrez.toLowerCase() == "pawn") {
    console.log("Vertically forward");
} else if (pecaDeXadrez.toLowerCase() == "king") {
    console.log("One square, any direction");
} else if (pecaDeXadrez.toLowerCase() == "queen") {
    console.log("Any direction, any number of squares");
} else if (pecaDeXadrez.toLowerCase() == "rook") {
    console.log("Horizontally or vertically.")
} else if (pecaDeXadrez.toLowerCase() == "bishop") {
    console.log("Diagonally");
} else if (pecaDeXadrez.toLowerCase() == "knight") {
    console.log("L shape movement");
} else {
    console.log("Error: Piece not found");
}