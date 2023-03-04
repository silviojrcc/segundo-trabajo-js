function ejercicio14(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 14</h2>
    <form class="form">
        <div>
            <label for="frase">Ingrese una frase</label>
            <input class="frase" name="frase" type="text">
        </div>
        <button>Agregar guiones</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const frase = articleEl.querySelector(".frase").value;
        const resultadoEl = articleEl.querySelector(".resultado");
        let nuevaFrase = "";

        if (frase != "") {
            for (let i = 0; i < frase.length; i++) {
                if (frase.charAt(i) != " ") {
                    if (i == frase.length - 1) {
                        nuevaFrase += frase.charAt(i);
                    } else {
                        nuevaFrase += `${frase.charAt(i)}-`;
                    }
                } else {
                    nuevaFrase += " -";
                }
            }
            resultadoEl.textContent = nuevaFrase;
        } else {
            resultadoEl.textContent = "Debe ingresar una frase valida!";
        }


    });
    el.appendChild(articleEl);
}