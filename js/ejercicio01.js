function ejercicio01(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 1</h2>
    <form class="form"
        <div class="">
            <label for="edad">Ingrese su edad</label>
            <input class="edad" name="edad" type="number">
        </div>
        <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        const edad = parseInt(articleEl.querySelector(".edad").value);
        const resultadoEl = articleEl.querySelector(".resultado");
        const edadConduccion = 18;

        if (!isNaN(edad)) {
            if (edad >= edadConduccion) {
                resultadoEl.textContent = "Usted puede manejar";
            } else {
                resultadoEl.textContent = "Usted NO puede manejar";
            }
        } else {
            alert("Debe ingresar una edad válida");
        }
    });
}