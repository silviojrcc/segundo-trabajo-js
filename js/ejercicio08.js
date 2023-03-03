function ejercicio08(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 8</h2>
    <form class="form">
        <div class="">
            <label for="numero">Ingrese un numero</label>
            <input class="numero" name="numero" type="">
        </div>
        <button>Hacer piramide</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let texto = "";
        const numeroAIterar = parseInt(articleEl.querySelector(".numero").value);
        const resultadoEl = articleEl.querySelector(".resultado");
        resultadoEl.textContent = "";

        if (!isNaN(numeroAIterar) && numeroAIterar > 1 && numeroAIterar <= 50) {
            for (let i = 1; i <= numeroAIterar ; i++) {
                for (let j = 1; j <= i; j++) {
                    texto += `${i}`
                }
                texto += `<br>`
            }
            resultadoEl.innerHTML = texto;
        } else {
            resultadoEl.textContent = "Debe ingresar un numero valido entre 1 y 50";
        }
    });
    el.appendChild(articleEl);
}