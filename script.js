document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  //Validar campo nombre
  let entradaNombre = document.getElementById("name");
  let errorNombre = document.getElementById("nameError");

  if (entradaNombre.value.trim() === "") {
    errorNombre.textContent = "Por favor, introducí tu nombre";
    errorNombre.classList.add("error-message");
  } else {
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message");
  }

  //Validad campo correo electrónico
  let entradaEmail = document.getElementById("email");
  let errorEmail = document.getElementById("emailError");
  let emailPattern =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (
    !emailPattern.test(entradaEmail.value) ||
    entradaEmail.value.trim() === ""
  ) {
    errorEmail.textContent =
      "Por favor, introducí un correo electrónico valido";
    errorEmail.classList.add("error-message");
  } else {
    errorEmail.textContent = "";
    errorEmail.classList.remove("error-message");
  }

  //Validar contraseña
  let entradaContrasena = document.getElementById("password");
  let errorContrasena = document.getElementById("passwordError");
  let contrasenaPattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  if (
    !contrasenaPattern.test(entradaContrasena.value) ||
    entradaContrasena.value.trim() === ""
  ) {
    errorContrasena.textContent =
      "La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales";
    errorContrasena.classList.add("error-message");
  } else {
    errorContrasena.textContent = "";
    errorContrasena.classList.remove("error-message");
  }

  //Enviar formulario si todos los campos son validos
  if (
    !errorNombre.textContent &&
    !errorEmail.textContent &&
    !errorContrasena.textContent
  ) {
    alert("¡El formulario fue enviado con éxito!");
    document.getElementById("formulario").reset();
  }
});
