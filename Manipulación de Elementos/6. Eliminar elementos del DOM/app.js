/* REMOVER ELEMENTOS DEL DOM */

//Método Nro 1 .remove()

//Eliminar el primer elemento de una lista

const firstItem = document.querySelector("li");
firstItem.remove();

//Método Nro 2 .removeChild()

//Eliminar un elemento en particular, el elemento nro 2
const list = document.querySelector("ul");
list.removeChild(list.firstElementChild);