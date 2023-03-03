function ejercicio03(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <p class="resultado"></p>
    `
    const resultado = articleEl.querySelector(".resultado");
    let palabra = "";
    do {
        palabra += prompt("Agregue una palabra");
        palabra += " - "
    } while (confirm("Desea seguir agregando palabras?") == true);

    resultado.textContent=`${palabra.slice(0, -2)}`

    el.appendChild(articleEl);

}