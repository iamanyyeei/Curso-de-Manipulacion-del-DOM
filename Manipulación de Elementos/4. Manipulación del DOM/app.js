/* MANIPULACIÓN DEL DOM SEGÚN EL COMPORTAMIENTO DEL USUARIO */

const contentArea = document.getElementById("contentArea");
console.log(contentArea);

//Inyecta el string indicado en el elemento seleccionado
//contentArea.innerHTML = "<p>Epale, soy una cadena de texto</p>";

//Inyecta el string donde yo quiera
contentArea.insertAdjacentHTML("afterend", "<p>Epale, soy una cadena de texto</p>");

//Agregar nuevos elementos sin modificar contenido existente
const listArea = document.getElementById("listArea");
console.log(listArea);

//Agrega nuevo contenido sin reemplazar el anterior. Sin embargo afecta al performance de la página porque rendereiza todo el contenedor padre otra vez
//listArea.innerHTML += "<li>Hello, i'm Any <3</li>";

//No afecta al performance, por lo cual es la mejor manera para agregar un elemento nuevo
listArea.insertAdjacentHTML("beforeend", "<li>Soy un nuevo elemento</li>");