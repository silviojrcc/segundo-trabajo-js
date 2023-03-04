function ejercicio12(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 12</h2>
    <button class="boton">Generar número aleatorio</button>
    <p class="resultado"></p>
    `;

    const boton = articleEl.querySelector(".boton");
    const resultadoEl = articleEl.querySelector(".resultado");

    const numeroMinimo = 1;
    const numeroMaximo = 99;

    boton.addEventListener("click", () => {
        const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
        resultadoEl.textContent = numeroAleatorio;
    });
    el.appendChild(articleEl);
}