const meuNome = "Gabriel Faria de Angelis";
const anoNascimento = 2003;
const anoAtual = new Date().getFullYear();
const horaAtual = new Date().getHours();

let idadeAtual = anoAtual - anoNascimento;

console.log(`Olá, ${meuNome}, o ano é ${anoAtual} e você tem ${idadeAtual} anos!`);
console.log(``);
console.log(`Essas são as tecnologias que você sabe:`);

const tecnologias = ['VBA', 'Python', 'JavaScript', 'HTML', 'CSS', 'C#'];

for (const tecnologia of tecnologias) {
    console.log(tecnologia);
}

console.table(tecnologias);

function dobrarNumero(numero) {
    let dobro = (numero * 2);
    console.log(`O dobro do número é: ${dobro}`);
}

console.log(``);
dobrarNumero(25);
dobrarNumero(5);
dobrarNumero(10);

function verificarParOuImpar(numero) {
    let verificador = (numero % 2);
    if (verificador === 0) {
        return `Número ${numero} é par.`;
    }
    else {
        return `Número ${numero} é impar.`;
    }
}

console.log(``);

const resultado = verificarParOuImpar(15);

console.log(resultado);

const titulo = document.querySelector("h1");

const tituloTexto = titulo.textContent;

console.log(``);

console.log(tituloTexto);

const cartoes = document.querySelectorAll(".card");

console.log(``);
console.log(cartoes.length);

const footerAno = document.querySelector("#ano-footer");

footerAno.textContent = `© ${anoAtual} - ${meuNome}.`;

const primeiroCard = document.querySelector('.card');

primeiroCard.style.backgroundColor = "#e6f3ff";
primeiroCard.style.borderLeftColor = "#ff6b6b";

cartoes[1].classList.add("destaque-amarelo");
cartoes[3].classList.add("destaque-amarelo");

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        link.classList.add("nav-clicado");
    });
});

const bodyTheme = document.querySelector("body");

const botaoFooter = document.querySelector("#btn-tema");

botaoFooter.addEventListener("click", () => {
    bodyTheme.classList.toggle("modo-escuro");
})

let contadorCliques = 0;

document.addEventListener("click", () => {
    contadorCliques++;
    console.log(contadorCliques);

    if (contadorCliques === 10) {
        alert("Você clicou 10 vezes!");
    }
});

const tarefas = ['Aprender HTML', 'Aprender CSS', 'Aprender JS'];

function mostrarTarefas(tarefas) {
    const listaTarefas = document.querySelector("#lista-tarefas");
    listaTarefas.innerHTML = "";
    for (const tarefa of tarefas) {
        listaTarefas.innerHTML += `<ul><li>${tarefa}</li></ul>`;
    }
}

function adicionarTarefas(texto) {
    tarefas.push(texto);
}

mostrarTarefas(tarefas);

adicionarTarefas("Banana");

mostrarTarefas(tarefas);

function getSaudacaoCompleta() {
    if (horaAtual > 5 && horaAtual < 12){
        return("☀️ Bom dia! Hora de codar!");
    }
    else if (horaAtual >= 12 && horaAtual < 18) {
        return ("🌤️ Boa tarde! Continue focado!");
    }
    else {
        return ("🌙 Boa noite! Não se esforce demais!")
    }
}

document.querySelector(".saudacao").textContent += `${getSaudacaoCompleta()}`;