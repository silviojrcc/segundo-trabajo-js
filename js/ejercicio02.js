function ejercicio02(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 2</h2>
    <form class="form">
        <label for="nota">Ingrese Nota</label>
        <input class="nota" name="nota" type="text">
    </form>
    <button>Mostrar calificación</button>
    <p class="resultado"></p>
    `

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nota = parseInt(articleEl.querySelector(".nota").value);
        const resultadoEl = articleEl.querySelector(".resultado");


        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            switch (nota) {
                case 0:
                case 1:
                case 2:
                    resultadoEl.textContent = "Muy deficiente";    
                    break;
                case 3:
                case 4:
                    resultadoEl.textContent = "Insuficiente";    
                    break;
                case 5:
                case 6:
                    resultadoEl.textContent = "Suficiente";    
                    break;
                case 7:
                    resultadoEl.textContent = "Bien";    
                    break;
                case 8:
                case 9:
                    resultadoEl.textContent = "Notable";
                    break;
                case 10:
                    resultadoEl.textContent = "Sobresaliente";
                    break;    
                default:
                    resultadoEl.textContent = "La nota ingresada no es correcta";
                    break;
            }
        } else {
            alert("Debe ingresar una nota valida");
        }
    });

    el.appendChild(articleEl);
}