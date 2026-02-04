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
