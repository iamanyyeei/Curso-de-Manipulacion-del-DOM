//Selecciona un div con la dicha clase
const container = document.querySelector(".container");
//Selecciona al botón 
const button = document.querySelector("button");

//Evento ocurre cuando: el mouse le pasa por encima al elemento
container.addEventListener("mouseover",() =>{
    container.style.backgroundColor = "green";
})

//Evento ocurre cuando: el mouse se quita de encima del elemento
//container.addEventListener("mouseout", ()=>{
    //container.style.backgroundColor = "red";
//})

//REMOVER ELEMENTOS: debo guardar el callback en una constante
const buttonClickCallback = () => {
    alert("Hiciste click <3");
};

//Evento ocurre cuando: se hace click en el elemento
button.addEventListener("click", buttonClickCallback);

//Esta es una función para remover el evento DESPUÉS DE CIERTO TIEMPO, es decir, a partir de ese momento ya no sirve el evento aunque haga click

setTimeout(() => {
    button.removeEventListener("click",buttonClickCallback);
}, 5000);

//OTRA MANERA: una vez que se dé click en el botón el evento queda desactivado.
// const btnClickCallback = () => {    
//    alert("Button clicked");    
//    button.removeEventListener('click', btnClickCallback); 
// }
// button.addEventListener('click', btnClickCallback);