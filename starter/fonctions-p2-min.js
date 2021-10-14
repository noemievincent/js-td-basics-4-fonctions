/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min()n'existe pas,
	déclarez la fonction calcMin pour qu'elle retroune
	le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
	- le minimum entre 4.5 et 5
	- le minimum entre 19 et 9
	- le minimum entre 1 et 1
N.B. Faites deux versions :
	- en utilisant la syntaxe classique
	- en utilisant une arrow function
*/

// synatxe classique

// function calcMin(nombre1, nombre2){
//     if (nombre1 < nombre2){
//         console.log(nombre1);
//     } else {
//         console.log(nombre2);
//     }
// }
//
// calcMin(4.5, 5);
// calcMin(19, 9);
// calcMin(1, 1);

// arrow function

// const calcMin = (nombre1, nombre2) => {
//     if (nombre1 < nombre2){
//         console.log(nombre1);
//     } else {
//         console.log(nombre2);
//     }
// }
//
// calcMin(4.5, 5);
// calcMin(19, 9);
// calcMin(1, 1);

// arrow function écriture encore plus concise

const calcMin = (nombre1, nombre2) => (nombre1 < nombre2 ? nombre1 : nombre2);

console.log(calcMin(4.5, 5));
console.log(calcMin(19, 9));
console.log(calcMin(1, 1));


