/* MODIFICAR ESTILOS */

// ----- MÉTODO NRO 1 .STYLE ------

//Cambiar el color de una fuente
const title = document.querySelector("h1");
console.log(title);

title.style.color ="pink";

//Cambiar el Background
const menu = document.querySelector(".menu");
console.log(menu);

menu.style.backgroundColor = "pink";

//Cambiar el size de un texto
menu.style.fontSize = "2rem";

// ----- MÉTODO NRO 2 .CLASSNAME ------

//Sustituye la clase .menu por .main-menu que coloca el texto en color verde
menu.className = "main-menu";


// ----- MÉTODO NRO 2 .CLASSLIST ------

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    //Al dar click al botón el menu desaparece
    menu.classList.toggle("invisible");
});