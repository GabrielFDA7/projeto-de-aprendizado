const form = document.querySelector("#form-pedido");
const resultado = document.querySelector("#resultado-pedido");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const produto = document.querySelector("#produto");
    const quantidade = document.querySelector("#quantidade");
    const observacoes = document.querySelector("#observacoes");

    resultado.innerHTML = `<p>${produto.value}</p>`;
    resultado.innerHTML += `<p>${quantidade.value}</p>`;
    resultado.innerHTML += `<p>${observacoes.value}</p>`;
});