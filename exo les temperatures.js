/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

let temperatures = [];
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);
    temperatures.push(t);
}

function temperatureProcheZero(temperatures) {
    if (temperatures.length === 0) {
        return 0;
    }
    
    let procheZero = temperatures[0];
    
    for (let i = 1; i < temperatures.length; i++) {
        let temperature = temperatures[i];
        
        if (Math.abs(temperature) < Math.abs(procheZero) || (Math.abs(temperature) === Math.abs(procheZero) && temperature > procheZero)) {
            procheZero = temperature;
        }
    }
    
    return procheZero;
}

let resultat = temperatureProcheZero(temperatures);

if (typeof resultat === "undefined") {
    resultat = 0; // Si aucune température n'a été trouvée, on initialise à zéro
}

console.log(resultat);


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

;
