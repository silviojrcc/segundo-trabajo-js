function ejercicio13(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 13</h2>
    <form class="form">
        <div>
            <label for="texto">Ingrese un texto</label>
            <input class="texto" name="texto" type="text">
        </div>
        <button>Convertir a mayúsculas!</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const texto = articleEl.querySelector(".texto").value;
        const resultadoEl = articleEl.querySelector(".resultado");

        if (texto != "") {
            resultadoEl.textContent = texto.toUpperCase();
        } else {
            resultadoEl.textContent = "Debe ingresar una palabra válida!!";
        }
        
    });
    el.appendChild(articleEl);
}