function ejercicio01(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 1</h2>
    <form class="form">
        <div class="">
            <label for="edad">Ingrese su edad</label>
            <input class="edad" name="edad" type="">
        </div>
        <button>Puedo manejar?</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        const edad = parseInt(articleEl.querySelector(".edad").value);
        const resultadoEl = articleEl.querySelector(".resultado");
        const edadConduccion = 18;

        if (!isNaN(edad) && edad > 1 && edad < 100) {
            if (edad >= edadConduccion) {
                resultadoEl.textContent = "Usted puede manejar";
            } else {
                resultadoEl.textContent = "Usted NO puede manejar";
            }
        } else {
            alert("Debe ingresar una edad válida");
        }
    });

    el.appendChild(articleEl);
}