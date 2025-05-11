/* CLONAR Y REEMPLAZAR ELEMENTOS */

// ------MÉTODO NRO 1 .REMOVE()

//Seleccionar área
const contentArea = document.querySelector("#contentArea");

//Seleccionar el elemento del contenedor a clonar
const originalP = contentArea.querySelector("p");
console.log(originalP);

//CLONAR EL ELEMENTO
const clonedP = originalP.cloneNode(true);

//Inyectar el elemento clonado
contentArea.append(clonedP);

//REEMPLAZAR EL ELEMENTO
clonedP.textContent = "Ya cambié";

// ------MÉTODO NRO 2 .REPLACEWITH()

const list = document.querySelector("#listArea");

//Seleccionar el item a reemplazar
const itemToReplace = listArea.children[2];
console.log(itemToReplace);

//REEMPLAZAR EL ELEMENTO
itemToReplace.replaceWith("Me cambiaron");