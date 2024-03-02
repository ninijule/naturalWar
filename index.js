let Enum = require('enum');

let myEnum = new Enum({
    Esclave: 'Esclave',
    MaitreEsclave: 'Maître esclave',
    JeuneSoldate: 'Jeune Soldate',
    Soldate: 'Soldate',
    SoldateElite: 'Soldate d\'élite',
    Gardienne: 'Gardienne',
    GardienneElite: 'Gardienne d\'élite',
    Tirailleuse: 'Tirailleuse',
    TirailleuseElite: 'Tirailleuse d\'élite',
    JeunLegionnaire: 'Jeune légionnaire',
    Legionnaire: 'Légionnaire',
    LegionnaireElite: 'Légionnaire d\'élite',
    JeuneTank: 'Jeune tank',
    Tank: 'Tank',
    TankElite: 'Tank d\'élite',
    Esclaves: 'Esclaves',
    MaitresEsclaves: 'Maîtres esclaves',
    JeunesSoldates: 'Jeunes Soldates',
    Soldates: 'Soldates',
    SoldatesElite: 'Soldates d\'élite',
    Gardiennes: 'Gardiennes',
    GardiennesElite: 'Gardiennes d\'élite',
    Tirailleuses: 'Tirailleuses',
    TirailleusesElite: 'Tirailleuses d\'élite',
    JeunesLegionnaires: 'Jeunes légionnaires',
    Legionnaires: 'Légionnaires',
    LegionnairesElite: 'Légionnaires d\'élite',
    JeunesTanks: 'Jeunes tanks',
    Tanks: 'Tanks',
    TanksElite: 'Tanks d\'élite'
});

class Result {
    constructor() {
        // Initialisation des propriétés avec des tableaux vides
        Object.keys(myEnum.enums).forEach(key => this[myEnum.enums[key].value] = []);
    }
}


let result = new Result();

let input = "123 Esclave, 1 234 Maîtres esclaves, 12 345 Jeunes soldates, 123 456 Soldates, 1 234 567 Soldates d'élite, 12 345 678 Gardiennes, 123 456 789 Gardiennes d'élite, 1 234 567 891 Tirailleuses, 12 345 678 912 Tirailleuses d'élite, 123 456 789 123 Jeunes légionnaires, 1 234 567 891 234 Légionnaires, 12 345 678 912 345 Légionnaires d'élite, 123 456 789 123 456 Jeunes tanks, 1 234 567 891 234 567 Tanks, 12 345 678 912 345 678 Tanks d'élite";
let reformated = input.split(',')

for (let a of reformated) {

    // Recherche du terme correspondant dans l'énumération
    let term = Object.keys(myEnum.enums).find(key => a.includes(myEnum.enums[key].value));

    // Si le terme est trouvé
    if (term) {
        // Extraction du nombre de l'entrée
        let count = parseInt(a.match(/\d+/g).join(''));

        // Ajout du nombre à la propriété correspondante dans le résultat
        result[myEnum.enums[term].value].push(count);
    }

}


// Convertir les chiffres en chaînes de caractères séparées par des virgules
let finalResult = {};
Object.keys(result).forEach(key => finalResult[key] = result[key].join(','));

console.log("item final : ", finalResult);