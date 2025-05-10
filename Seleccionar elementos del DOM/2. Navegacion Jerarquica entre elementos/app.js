/*  NAVEGAR DE PADRES A HIJOS*/

//Buscar al padre, en este caso una etiqueta UL
const parent = document.getElementById("parent");
console.log("parent");

//Buscar a los hijos de UL, los LI
const children = parent.children;
console.log(children);

//Llegar al PRIMER HIJO
const firstChild = parent.firstElementChild;
console.log(firstChild);

//Legar al ÚLTIMO HIJO
const lastChild = parent.lastElementChild;
console.log(lastChild);

//Legar al elemento ANTES del padre, es decir,su hermano
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

//Llegar al elemento DESPUÉS del padre, es decir, también su hermano pero después de este
const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

//OTROS MÉTODOS PARA SELECCIONAR DE PADRES A HIJOS

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection


//Trae un objeto con una lista de los nodos de los HIJOS del elemento PADRE, incluidos los saltos de línea, a los que se les denomina #text
const childNodes = parent.childNodes;
console.log(childNodes);