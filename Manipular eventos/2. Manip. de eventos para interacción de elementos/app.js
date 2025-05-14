const button = document.querySelector("button");

//Función que imprime el objeto del evento que está ocurriendo
const buttonClicked = (event) => {
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
};

//El evento ocurre al hacer CLICK: se llama a la función buttonClicked
button.addEventListener("click", buttonClicked);