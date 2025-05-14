//MÉTODO NRO. 1

/*
//Aceso a todos los elementos LI
const listItems = document.querySelectorAll("li");

//Recorrer la lista de LI para agregarle el evento eventListener
listItems.forEach((item) => {
    //Aquí le agrega la ESCUCHA DEL EVENTO
    item.addEventListener("click", (event) =>{
        //Al darle click vaya al objeto del target para que haga un toggle de la clase
        event.target.classList.toggle("highlight");
    });

    //De esta manera nos cuesta mucho a nivel de PERFORMANCE
});*/

//MÉTODO NRO. 2

//Acceso al elemento PADRE
const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
    //Al dar click buscar el target cercano a un elemento li
    event.target.closest("li").classList.toggle("highlight");
});