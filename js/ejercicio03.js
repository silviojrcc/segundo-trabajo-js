function ejercicio03(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 3</h2>
    <p class="resultado"></p>
    `
    const resultado = articleEl.querySelector(".resultado");
    let palabra = "";
    do {
        palabra += prompt("Agregue una palabra");
        if (palabra != "") {
            palabra += " - "
        } else {
            alert("Debe ingresar una palabra");
        }
    } while (confirm("Desea seguir agregando palabras?") == true);

    if (palabra != "" && palabra != null) {
        resultado.textContent = `${palabra.slice(0, -2)}`
    } else {
        resultado.textContent = "debe ingresar alguna palabra";
    }

    el.appendChild(articleEl);

}