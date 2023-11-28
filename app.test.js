const {partOne, partTwo, isSumEqualTo2020, trouverDeuxValeurs, trouverTroisValeurs, lireFichierTexte} = require('./app');

test('Exemple', () => {
    expect(
        partOne([
            1721,
            979,
            366,
            299,
            675,
            1456,
        ])
    ).toBe(514579);
});

test('Exemple', () => {
    expect(
        partTwo([
            1721,
            979,
            366,
            299,
            675,
            1456,
        ])
    ).toBe(241861950);
});

test('Sum is 2020', () => {
    expect(
        isSumEqualTo2020([1721, 299])
    ).toBe(true);
});

test('Sum of three values is 2020', () => {
    expect(
        isSumEqualTo2020([979, 366, 675])
    ).toBe(true);
});

test('Sum is not 2020', () => {
    expect(
        isSumEqualTo2020([675, 1456])
    ).toBe(false);
});

test('Trouver les deux valeurs', () => {
    expect(
        trouverDeuxValeurs([
            1721,
            979,
            366,
            299,
            675,
            1456,
        ])
    ).toStrictEqual([1721, 299]);
});

test('Trouver les trois valeurs', () => {
    expect(
        trouverTroisValeurs([
            1721,
            979,
            366,
            299,
            675,
            1456,
        ])
    ).toStrictEqual([979, 366, 675]);
});

test('Trouver les deux valeurs', () => {
    expect(
        trouverDeuxValeurs([
            1722,
            979,
            366,
            298,
            675,
            1456,
        ])
    ).toStrictEqual([1722, 298]);
});

test('Fichier d\'exemple renvoi un tableau', () => {
    expect(
        lireFichierTexte('./input.example.text')
    ).toStrictEqual([
        1844,
        1123,
        1490,
        1478
    ])
});