/* SELECCIONAR UN SOLO ELEMENTO */

document.getElementById("app-title"); //Por su ID

document.querySelector("#app-title"); //Por su ID

document.querySelector("p"); //Por su etiqueta



/* SELECCIONAR MÚLTIPLES ELEMENTOS */

document.getElementsByClassName("menu-items"); //Por su clase

document.getElementsByTagName("p"); //Por su nombre de etiqueta

document.querySelectorAll(".menu-items"); //Por su selector o clase

//Los getElement/getElements hacen que la consulta sea más rápida a como lo sería con un querySelector