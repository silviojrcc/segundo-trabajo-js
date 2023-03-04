function ejercicio10(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 10</h2>
    <form class="form">
        <div>
            <label for="filas">Ingrese la cantidad de filas</label>
            <input class="filas" name="filas" type="text">
        </div>
        <div>
            <label for="columnas">Ingrese la cantidad de columnas</label>
            <input class="columnas" name="columnas" type="text">
        </div>
        <button>Realizar matriz</button>
    </form>
    <p class="resultado"></p>
    `;

    const formEl = articleEl.querySelector(".form");
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const filas = parseInt(articleEl.querySelector(".filas").value);
        const columnas = parseInt(articleEl.querySelector(".columnas").value);
        const resultado = articleEl.querySelector(".resultado");
        let texto = "";

        let cantidadNumeros = filas * columnas;

        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                texto += ` ${cantidadNumeros} `;
                cantidadNumeros--;
            }
            texto += "<br>"
        }

        resultado.innerHTML = texto;

    });
    el.appendChild(articleEl);
}