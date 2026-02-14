const agora = new Date();
const hora = agora.getHours();

function saudacao(hora) {
    if (hora < 12) {
        return ("Bom dia!");
    }
    else if (hora >= 12 && hora < 18) {
        return ("Boa tarde!");
    }
    else {
        return ("Boa noite!");
    }
}

const saudarIntroducao = document.querySelector("#introducao");

if (saudarIntroducao) {
    saudarIntroducao.innerHTML += `<p>${saudacao(hora)}</p>`;
} else {
    console.log("ERRO: Elemento #introducao não encontrado!");
}

const linksNav = document.querySelectorAll("nav a");

linksNav.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(`${link.textContent}`);
    });
});

const habilidades = document.querySelectorAll(".habilidades-container div");

habilidades.forEach((habilidade) => {
    habilidade.addEventListener("mouseover", () => {
        habilidade.classList.add("ativo");
    });

    habilidade.addEventListener("mouseout", () => {
        habilidade.classList.remove("ativo");
    });
});

const projetos = document.querySelectorAll(".projetos-container article");

projetos.forEach((projeto) => {
    projeto.addEventListener("mouseover", () => {
        projeto.classList.add("ativo");
    });

    projeto.addEventListener("mouseout", () => {
        projeto.classList.remove("ativo");
    });
});


const footerCopyright = document.querySelector("#copyright");
const anoAtual = new Date().getFullYear();

footerCopyright.textContent += `${anoAtual}.`;

const form = document.querySelector("form");

const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#e-mail");
const erroMsg = document.querySelector(".erro-msg");
const sucessoMsg = document.querySelector(".sucesso-msg");

function validarNome() {
    const nome = nomeInput.value;

    if (nome.trim() === "") {
        nomeInput.classList.add("erro");
        erroMsg.textContent = "Por favor, insira um nome.";
    }
    else if (nome.length < 3) {
        nomeInput.classList.add("erro");
        erroMsg.textContent = "Por favor, insira um nome com pelo menos 3 caracteres.";
    }
    else {
        nomeInput.classList.remove("erro");
        erroMsg.textContent = "";
    }
}

function validarEmail() {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultadoEmail = emailRegex.test(email);
    if (!resultadoEmail) {
        emailInput.classList.add("erro");
        erroMsg.textContent = "Por favor, insira um email válido.";
    }
    else {
        emailInput.classList.remove("erro");
        erroMsg.textContent = "";
    }
}

emailInput.addEventListener("input", (event) => {
    validarEmail()
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    if (nomeInput.classList.contains("erro") || emailInput.classList.contains("erro")) {
        return;
    }
    else {
        sucessoMsg.classList.remove("hidden");
        setTimeout(() => {
            sucessoMsg.classList.add("hidden");
        }, 3000);
        form.reset();
    }
});