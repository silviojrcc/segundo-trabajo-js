function ejercicio11(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 11</h2>
    <form class="form">
        <div>
            <label for="nombre-persona-1">Ingrese el nombre de la primera persona</label>
            <input name="nombre-persona-1" class="nombre-persona-1" type="text">
            <label for="edad-persona-1">Ingrese la edad de la primera persona</label>
            <input name="edad-persona-1" class="edad-persona-1" type="text">
        </div>
        <div>
            <label for="nombre-persona-2">Ingrese el nombre de la segunda persona</label>
            <input name="nombre-persona-2" class="nombre-persona-2" type="text">
            <label for="edad-persona-2">Ingrese la edad de la segunda persona</label>
            <input name="edad-persona-2" class="edad-persona-2" type="text">
        </div>
        <div>
            <label for="nombre-persona-3">Ingrese el nombre de la tercera persona</label>
            <input name="nombre-persona-3" class="nombre-persona-3" type="text">
            <label for="edad-persona-3">Ingrese la edad de la tercera persona</label>
            <input name="edad-persona-3" class="edad-persona-3" type="text">
        </div>
        <button>Que persona es mayor?</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    articleEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const resultado = articleEl.querySelector(".resultado");
        const nombrePersona1 = articleEl.querySelector(".nombre-persona-1").value;
        const edadPersona1 = parseInt(articleEl.querySelector(".edad-persona-1").value);
        const nombrePersona2 = articleEl.querySelector(".nombre-persona-2").value;
        const edadPersona2 = parseInt(articleEl.querySelector(".edad-persona-2").value);
        const nombrePersona3 = articleEl.querySelector(".nombre-persona-3").value;
        const edadPersona3 = parseInt(articleEl.querySelector(".edad-persona-3").value);

        const mayor = Math.max(edadPersona1, edadPersona2, edadPersona3);
        console.log(mayor);
        if (edadPersona1 === mayor) {
            resultado.textContent = `El mayor es ${nombrePersona1}`
        } else if (edadPersona2 === mayor) {
            resultado.textContent = `El mayor es ${nombrePersona2}`
        } else if (edadPersona3 === mayor) {
            resultado.textContent = `El mayor es ${nombrePersona3}`
        }
    });
    el.appendChild(articleEl);
}