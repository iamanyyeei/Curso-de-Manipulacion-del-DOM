console.log("-----NAVEGAR DE PADRES A HIJOS-----");
/*  NAVEGAR DE PADRES A HIJOS  */

//Buscar al padre, en este caso una etiqueta UL
const parent = document.getElementById("parent");
console.log("parent");

//Buscar a los hijos de UL, los LI
const children = parent.children;
console.log(children);

//Trae un objeto con todos los nodos de los HIJOS del elemento PADRE, incluidos los saltos de línea, a los que se les denomina #text
const childNodes = parent.childNodes;
console.log(childNodes);

//Sirve para traer el primer nodo del primer HIJO LI
const children2 = parent.firstChild;
console.log(children2);

//Llegar al PRIMER HIJO
const firstChild = parent.firstElementChild;
console.log(firstChild);

//Trae al ÚLTIMO nodo de los HIJOS del elemento PADRE
const lastChild2 = parent.lastChild;
console.log(lastChild2);

//Legar al ÚLTIMO HIJO
const lastChild = parent.lastElementChild;
console.log(lastChild);


console.log("-----NAVEGAR ENTRE HERMANOS-----");
/*  NAVEGAR ENTRE HERMANOS  */

//Trae al nodo anterior del elemento HERMANO del padre
const previousSibling2 = parent.previousSibling;
console.log(previousSibling2);

//Legar al elemento ANTES del padre, es decir,su hermano
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

//Llegar al nodo del elemento HERMANO, es decir, DESPUÉS del padre
const nextSibling2 = parent.nextSibling;
console.log(nextSibling2);

//Llegar al elemento DESPUÉS del padre, es decir, también su hermano pero después de este
const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

//OTROS MÉTODOS PARA SELECCIONAR DE PADRES A HIJOS

// children; // live HTMLCollection -----APRENDIDO EN CLASES4
// childNodes; // live NodeList  -----INVESTIGACIÓN PERSONAL
// firstChild; // live NodeList -----INVESTIGACIÓN PERSONAL
// firstElementChild; // non-live HTMLCollection -----APRENDIDO EN CLASES
// lastChild; // live NodeList -----INVESTIGACIÓN PERSONAL
// lastElementChild; // non-live HTMLCollection -----APRENDIDO EN CLASES
// previousSibling; // live NodeList -----INVESTIGACIÓN PERSONAL
// previousElementSibling; // non-live HTMLCollection -----APRENDIDO EN CLASES
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection -----APRENDIDO EN CLASES


console.log("-----NAVEGAR DE HIJOS A PADRES-----");
/*  NAVEGAR DE HIJOS A PADRES  */

//Este es el elemento HIJO a artir del cual vamos a navegar
const hijo = document.querySelector("li");
console.log(hijo);

//Traer al node (PADRE) del hijo
const parent2 = hijo.parentNode;
console.log(parent2);

//Trae al elemento PADRE
const elementoPadre = hijo.parentElement;
console.log(elementoPadre);

//Trae al elemento ABUELO más cercano, que se le indique. Es decir, el padre del elemento PADRE

//Es el mmétodo MÁS UTILIZADO
const grandParent = hijo.closest("menu");
console.log(grandParent);