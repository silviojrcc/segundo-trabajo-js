function ejercicio04(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <p class="resultado"></p>
    `
    const resultado = articleEl.querySelector(".resultado");
    let suma = 0;

    do {
        const numero = parseFloat(prompt("Ingrese un numero"));
        if (!isNaN(numero)) {
            suma += numero;
        } else {
            alert("Debe ingresar un numero valido!!");
        }
    } while (confirm("Desea seguir agregando numeros?") == true);

    resultado.textContent = `La suma de todos los numeros ingresados dio ${suma}`;
    
    el.appendChild(articleEl);
}