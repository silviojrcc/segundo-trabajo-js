function ejercicio07(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 7</h2>
    <form class="form">
        <div class="">
            <label for="numero">Ingrese un numero</label>
            <input class="numero" name="numero" type="">
        </div>
        <button>Hacer piramide invertida</button>
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
            for (let i = numeroAIterar; i > 0; i--) {
                for (let j = i; j > 0; j--) {
                    texto += `${i}`;
                }
                texto += `<br>`;
            }
            resultadoEl.innerHTML = texto;
        } else {
            resultadoEl.textContent = "Debe ingresar un numero valido entre 1 y 50";
        }
    });
    el.appendChild(articleEl);
}