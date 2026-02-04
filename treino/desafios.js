const meuNome = "Gabriel Faria de Angelis";
const anoNascimento = 2003;
const anoAtual = new Date().getFullYear();

let idadeAtual = anoAtual - anoNascimento;

console.log(`Olá, ${meuNome}, o ano é ${anoAtual} e você tem ${idadeAtual} anos!`);
console.log(``);
console.log(`Essas são as tecnologias que você sabe:`);

const tecnologias = ['VBA','Python','JavaScript','HTML','CSS','C#'];

for (const tecnologia of tecnologias){
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
    if (verificador === 0){
        return `Número ${numero} é par.`;
    }
    else{
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