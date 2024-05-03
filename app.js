

let tab = [1, 3, 5, 7, 9];

console.log(tab);

tab.push(11, 13, 15);

console.log(tab);

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

let somme = 0;

for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
}

console.log(somme);