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

const formLogin = document.querySelector("#form-login");

function validarUser() {
    const user = document.querySelector("#usuario");
    const userValor = user.value.trim();

    if (userValor === "") {
        user.classList.add("erro");
        document.querySelector("#erro-usuario").textContent = "Usuário é obrigatório";
    }
    else if (userValor.length < 3) {
        user.classList.add("erro");
        document.querySelector("#erro-usuario").textContent = "Usuário deve ter pelo menos 3 caracteres";
    }
    else {
        user.classList.remove("erro");
        document.querySelector("#erro-usuario").textContent = "";
    }
}

function validarPassword() {
    const password = document.querySelector("#senha");
    const passwordValor = password.value.trim();

    if (passwordValor === "") {
        password.classList.add("erro");
        document.querySelector("#erro-senha").textContent = "Senha é obrigatória";
    }
    else if (passwordValor.length < 6) {
        password.classList.add("erro");
        document.querySelector("#erro-senha").textContent = "Senha deve ter pelo menos 6 caracteres";
    }
    else {
        password.classList.remove("erro");
        document.querySelector("#erro-senha").textContent = "";
    }
};

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    validarUser();
    validarPassword();
});


const formEmail = document.querySelector("#form-newsletter");
const emailInput = document.querySelector("#email-news");

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailResultado = regex.test(email);

    if (emailResultado === false) {
        emailInput.classList.add("erro");
        emailInput.classList.remove("valido");
    }
    else {
        emailInput.classList.add("valido");
        emailInput.classList.remove("erro");
    }
};

formEmail.addEventListener("submit", (event) => {
    event.preventDefault();
    validarEmail(emailInput.value);
});