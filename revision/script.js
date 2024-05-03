// Récupération d'un élement du DOM
let text = document.querySelector("#text");
let clickMe = document.querySelector("#clickMe");
let form = document.querySelector("#form");
let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");
let main = document.querySelector("#main");

let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let redValue = document.querySelector("#redValue");
let greenValue = document.querySelector("#greenValue");
let blueValue = document.querySelector("#blueValue");
let color = document.querySelector("#color");

let redColor = document.querySelector("#redColor");
let greenColor = document.querySelector("#greenColor");
let blueColor = document.querySelector("#blueColor");

// Ajout d'un écouteur d'événement
form.addEventListener("submit", function(event) {
    event.preventDefault();
    // text.value = range.value;
});

range.addEventListener("input", function() {
    rangeValue.value = range.value;
    let conteneur = '';
    for(let i = 0; i < range.value; i++) {
        conteneur += '<div class="conteneur">' + text.value + " " + i + '</div>';
    }

    main.innerHTML = conteneur;
});

red.addEventListener("input", function() {
    colorChange();
});

red.addEventListener("input", colorChange); 
green.addEventListener("input", colorChange);
blue.addEventListener("input", colorChange);

function colorChange() {
    redValue.value = red.value;
    greenValue.value = green.value;
    blueValue.value = blue.value;
    redColor.style.backgroundColor = 'rgb(' + red.value + ',0,0)';
    greenColor.style.backgroundColor = 'rgb(0,' + green.value + ',0)';
    blueColor.style.backgroundColor = 'rgb(0,0,' + blue.value + ')';
    color.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}