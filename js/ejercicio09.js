function ejercicio09(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <div class="resultado"></div>
    `;

    const resultadoEl = articleEl.querySelector(".resultado");
    let texto = "";

    for (let i = 1; i <= 500; i++) {
        texto += i;
        if (i % 4 === 0) {
            texto += " (Múltiplo de 4)";
        }
        if (i % 9 === 0) {
            texto += " (Múltiplo de 9)";
        }
        texto += "<br>";
        if (i % 5 === 0) {
            texto += "---------------------------------------------------";
            texto += "<br>";
        }
    }
    resultadoEl.innerHTML = texto;
    el.appendChild(articleEl);
}