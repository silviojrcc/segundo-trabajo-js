function ejercicio17(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 17</h2>
    <form class="form">
        <div>
            <label for="frase">Ingresar un text</label>
            <input class="texto" name="texto" type="text">
        </div>
        <button>Encontrar primera vocal!</button>
    </form>
    <p class="resultado"></p>
    `

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const resultadoEl = articleEl.querySelector(".resultado");
        const texto = articleEl.querySelector(".texto").value.toLowerCase();
        
        if (texto != "") {
            let posicionPrimeraVocal = 0;
            for (let i = 0; i < texto.length; i++) {
                if ("aeiou".includes(texto.charAt(i))) {
                     resultadoEl.textContent = `La primera vocal estaba en la posicion ${i}`;
                     break;
                } else {
                    resultadoEl.textContent = "No había vocales en el texto ingresado";
                }
            }
        } else {
            resultadoEl.textContent = "Debe ingresar una frase valida!";
        }
    });
    el.appendChild(articleEl);
}