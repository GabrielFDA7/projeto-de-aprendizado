const agora = new Date();

const hora = agora.getHours();

function saudacao(hora) {
    if (hora < 12) {
        return ("Bom dia!");
    }
    else if (hora > 12 && hora < 18) {
        return ("Boa tarde!");
    }
    else {
        return ("Boa noite!");
    }
}

const saudarIntroducao = document.querySelector("#introdução");

saudarIntroducao.innerHTML += `<p>${saudacao(hora)}</p>`;

const linksNav = document.querySelectorAll("nav a");

linksNav.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("nav link clickado!");
    });
});