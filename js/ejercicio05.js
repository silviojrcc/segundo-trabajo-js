function ejercicio05(el) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  do {
    const dni = parseInt(prompt("Ingrese un DNI"));
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
        let letra = letras.charAt(dni % 23);
        alert("La letra de tu DNI es: " + letra);
    } else {
        alert("Debe ingresar un numero de dni valido!");
    }
  } while (confirm("Desea seguir calculando letras de DNI?"));
}

