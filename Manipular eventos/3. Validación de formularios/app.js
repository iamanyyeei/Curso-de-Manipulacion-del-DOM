//Acceso al formulario
const form = document.getElementById("myForm");

//Función que se activa al momento que se termine de llenar el formulario
form.addEventListener("submit", (event) => {
    //Evitar que se refresque la página al presionar el botón de submit
    event.preventDefault();
    //Encontrar dentro del form un elemento con ese atributo llamado "name"
    //Con el value me trae el valor con el que se llenó ese campo del formulario
    const name = form.elements["name"].value;
    console.log(name);

    //Este condicional valida que el nombre tenga más de 3 letras
    if (name.length < 3) {
    alert("El nombre necesita más de 3 letras");
    return;
  }

  //Valida que el correo esté completo
  const email = form.elements["email"].value;
  console.log(email);
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  //Alerta de que el envío de formulario funcionó
   alert("Formulario enviado exitosamente!");

   console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);

  //Objeto con los datos del formulario
  const formData = {
    name: name,
    email: email,
  };

  //Llamado del objeto
  console.log(formData);
});