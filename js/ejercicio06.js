function ejercicio06(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 6</h2>
    <p class="resultado"></p>
    `
    const resultado = articleEl.querySelector(".resultado");
    let texto = "";

    for (let i = 1; i <= 30 ; i++) {
        for (let j = 1; j <= i; j++) {
            texto += `${i}`
        }
        texto += `<br>`
    }

    resultado.innerHTML = texto;
    el.appendChild(articleEl);
}