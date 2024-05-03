// console.log('tututu');

// let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(tableau[3]);

// let objet = { 
//     nom: 'toto', 
//     age: [30, 40, 50],
//     taille:{ taille1: 180, taille2: 190, taille3: 200}
// };

// console.log(objet.nom);
// console.log(objet.age[1]);
// console.log(objet.taille.taille2);

let bibliotheque = [
    {titre: 'Astérix', type: 'BD'},
    {titre: 'Harry Potter', type: 'Roman'}, 
    {titre: 'Le Seigneur des Anneaux', type: 'Fantasy'}
];



// let carnet = [
//     { nom: 'raton', prenom: 'laveur', tel: '0636363636', mail: 'raton@gmail.com'},
//     { nom: 'loutre', prenom: 'desmer', tel: '0789654236', mail: 'loutre@gmail.com'},
//     { nom: 'panda', prenom: 'roux', tel: '0658987415', mail: 'panda@gmail.com'},
//     { nom: 'tigre', prenom: 'blanc', tel: '0789546321', mail: 'tigre@gmail.com'},
//     { nom: 'lion', prenom: 'grougrou', tel: '0658252565', mail: 'lion@gmail.com'}
// ];

// for (let i in carnet) {
//     console.log(carnet[i].nom , carnet[i].prenom);
// }

let premier = document.getElementById('premier');
// let raton = document.getElementsByClassName('raton');

// raton[0].innerHTML = 'bonjour';

// for (let i in bibliotheque) {
//     premier.innerHTML += bibliotheque[i].titre + ' est un(e) ' + bibliotheque[i].type + ' , ';
// }

let boutton = document.querySelector('#clic');
let boutton2 = document.querySelector('#clic2');
let boutton3 = document.querySelector('#clic3');
let texte = document.querySelector('#texte');

boutton.addEventListener('click', function() {
    for (let i in bibliotheque) {
        premier.innerHTML += bibliotheque[i].titre + "<br>";
    }
});

boutton2.addEventListener('click', function() {
    premier.innerHTML = '';
});

boutton3.addEventListener('click', function() {
    console.log(texte.value);
});