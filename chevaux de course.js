/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let puissances = [];

for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    puissances.push(pi);
}

puissances.sort();  // Trie les puissances dans l'ordre croissant

let differenceMin = Infinity;  // Initialise la différence minimale avec une valeur infinie
let puissance1 = 0;
let puissance2 = 0;

// Parcourt les puissances triées pour trouver la paire avec la plus petite différence
for (let i = 0; i < N - 1; i++) {
    const difference = Math.abs(puissances[i+1] - puissances[i]);
    if (difference < differenceMin) {
        differenceMin = difference;
        puissance1 = puissances[i];
        puissance2 = puissances[i+1];
    }
}

console.log(differenceMin);
