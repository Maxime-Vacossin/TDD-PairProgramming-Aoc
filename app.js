var fs = require('fs');

var vraiData = lireFichierTexte('./input.text');

console.log(partOne(vraiData));
console.log(partTwo(vraiData))

function partOne(data) {
    // Récuperer la liste de toutes les combinaisons
    // Filtrer les résultats
    result = trouverDeuxValeurs(data);

    // Multiplier les deux valeurs restantes entre elles
    // retourner le résultat final

    return result[0] * result[1];
}

function trouverTroisValeurs(data) {
    // Récuperer la liste de toutes les combinaisons et Filtrer les résultats
    for (let i of data) {
        for (let j of data) {
            for (let k of data) {
                if(isSumEqualTo2020([i, j, k])) {
                    return [i, j, k]
                };
            }
        }
    }
}

function partTwo(data) {
    // Récuperer la liste de toutes les combinaisons
    // Filtrer les résultats
    result = trouverTroisValeurs(data);

    // Multiplier les deux valeurs restantes entre elles
    // retourner le résultat final

    return result[0] * result[1] * result[2];
}

function isSumEqualTo2020(values) {
    let sum = 0
    for (let i of values) {
        sum += i;
    }
    return sum === 2020;
}

function trouverDeuxValeurs(data) {
    // Récuperer la liste de toutes les combinaisons et Filtrer les résultats
    for (let i of data) {
        for (let j of data) {
            if(isSumEqualTo2020([i, j])) {
                return [i, j]
            };
        }
    }
}

function lireFichierTexte(cheminFichier) {

    return fs.readFileSync(cheminFichier, 'utf8')
        .split('\n')
        .map(function (value) {
            return parseInt(value);
        });
}


module.exports = {partOne, isSumEqualTo2020, trouverDeuxValeurs, trouverTroisValeurs, lireFichierTexte, partTwo};