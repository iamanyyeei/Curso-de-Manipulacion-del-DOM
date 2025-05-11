/* CREAR NUEVOS ELEMENTOS EN EL DOM */

const contentArea = document.getElementById("contentArea");
console.log(contentArea);

//Crear la etiqueta
const newElement = document.createElement("p");

console.log(newElement);

//Agregar el texto contenedor
newElement.textContent = "Soy un nuevo elemento";

//Inyectar el elemento al DOM
contentArea.append(newElement);

/* Ejercicio complementario */

const newItem = document.createElement("li");

newItem.textContent = "Soy un nuevo item";

console.log(newItem);

const listArea = document.getElementById("listArea");

listArea.append(newItem);

//Se puede utilizar como métodos para cambiar la posición del nuevo elemento: append, prepend, before y after