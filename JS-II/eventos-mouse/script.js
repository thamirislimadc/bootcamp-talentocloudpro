// Passar o mouse sobre o botão
let button = document.querySelector("button");
let span = document.querySelector("span");
let section = document.querySelector("section");

function mostrarSpan(){
    span.style.opacity = "100"  
}
button.addEventListener("mouseover", mostrarSpan);

function ocultarSpan(){
    span.style.opacity = "0"  
}
button.addEventListener("mouseout", ocultarSpan);

// Click
function fazerUmClick(){
    section.innerText = "Fez um click simples!"
}
button.addEventListener("click", fazerUmClick);

// Duplo click
function fazerDoisClicks(){
    section.innerText = "Fez um duplo click!"
}
button.addEventListener("dblclick", fazerDoisClicks);

// Click com o botão direito
function fazerClickDireito(){
    section.innerText = "Fez um click com o botão direito!"
}
button.addEventListener("contextmenu", fazerClickDireito);

// Mouse down
function mousePressionado(){
    section.innerText = "Mouse pressionado!"
}
button.addEventListener("mousedown", mousePressionado);