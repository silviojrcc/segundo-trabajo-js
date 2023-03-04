function ejercicio16(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 16</h2>
    <form class="form">
        <div>
            <label for="frase">Ingresar una frase</label>
            <input class="frase" name="frase" type="text">
        </div>
        <button>Dar vuelta la frase!</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const resultadoEl = articleEl.querySelector(".resultado");
        const frase = articleEl.querySelector(".frase").value;
        let fraseAlReves = "";

        for (let i = frase.length; i >= 0; i--) {
            fraseAlReves += frase.charAt(i);
        }
        resultadoEl.textContent = fraseAlReves;
    });
    el.appendChild(articleEl);
}