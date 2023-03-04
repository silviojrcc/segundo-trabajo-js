function ejercicio15(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 15</h2>
    <form class="form">
        <div>
            <label for="texto">Ingrese un texto</label>
            <input class="texto" name="texto" type="text">
        </div>
        <button>Contar vocales!</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const resultado = articleEl.querySelector(".resultado");
        const texto = articleEl.querySelector(".texto").value;
        let numeroVocales = 0;

        for (let i = 0; i < texto.length; i++) {
            if (texto.charAt(i) === "a" || texto.charAt(i) === "e" || texto.charAt(i) === "i" || texto.charAt(i) === "o" || texto.charAt(i) === "u") {
                numeroVocales++;
            }        
        }

        resultado.textContent = `La cantidad de vocales que tiene el texto es de: ${numeroVocales}`;
    });
    el.appendChild(articleEl);
}