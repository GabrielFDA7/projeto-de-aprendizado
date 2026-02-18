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
    const emailResultado = regex.test(email.value);

    if (emailResultado === false) {
        email.classList.add("erro");
        email.classList.remove("valido");
    }
    else {
        email.classList.add("valido");
        email.classList.remove("erro");
    }
};

formEmail.addEventListener("submit", (event) => {
    event.preventDefault();
    validarEmail(emailInput);
});

const formConta = document.querySelector("#form-conta");
const emailConta = document.querySelector("#email-conta");

formConta.addEventListener("input", (event) => {
    validarEmail(emailConta);
});

const senhaConta = document.querySelector("#senha-conta");
const barra = document.querySelector("#barra-forca");
const senhaForca = document.querySelector("#texto-forca");

senhaConta.addEventListener("input", () => {
    const senhaValor = senhaConta.value;
    barra.className = "barra";

    if (senhaValor.length === 0){
        senhaForca.textContent = "";
        return;
    }

    const temNumero = /[0-9]/.test(senhaValor);
    const temLetra = /[a-zA-Z]/.test(senhaValor);
    const temEspecial = /[!@#$%&*()_+\|-]/.test(senhaValor);

    if (senhaValor.length < 6 ) {
        barra.classList.add("fraca");
        senhaForca.textContent = "Senha fraca!";
        senhaForca.style.color = "Red";
    }
    else if (senhaValor.length >= 6 && temNumero && temLetra && temEspecial) {
        barra.classList.add("forte");
        senhaForca.textContent = "Senha forte!";
        senhaForca.style.color = "Green";
    }
    else if (senhaValor.length >= 6 && temNumero && temLetra) {
        barra.classList.add("media");
        senhaForca.textContent = "Senha média!";
        senhaForca.style.color = "Yellow";
    }
    else if (senhaValor.length >= 6 ) {
        barra.classList.add("media");
        senhaForca.textContent = "Senha média!";
        senhaForca.style.color = "Yellow";
    }
});

const confirmarSenha = document.querySelector("#confirmar-senha");
const erroConfirmar = document.querySelector("#erro-confirmar");

confirmarSenha.addEventListener("input", () => {
    const confirmarInput = confirmarSenha.value;
    const senhaInput = senhaConta.value;

    if (confirmarInput.length === 0) {
        erroConfirmar.textContent = "";
        return;
    }

    if (confirmarInput != senhaInput) {
        erroConfirmar.textContent = "As senhas devem ser iguais!";
    }
    else if (confirmarInput === senhaInput) {
        erroConfirmar.textContent = "";
    }
})
