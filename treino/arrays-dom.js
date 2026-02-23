// ============================================
// 🎯 Arrays, JS Moderno e DOM Dinâmico
// ============================================
// Escreva seu código aqui!
// Os gabaritos estão comentados no HTML.
// Tente resolver sozinho antes de olhar!
// ============================================

const botao = document.querySelector("#btn-desafio1");

const meuArray = [3, 7, 12, 5, 20, 8, 15, 2];

const dobroMeuArray = meuArray.map((numero) => numero * 2);

const pares = meuArray.filter((numero) => numero % 2 === 0);

botao.addEventListener("click", (event) => {
    event.preventDefault();

    const resultado = document.querySelector("#resultado1");

    resultado.innerHTML = `Dobro: ${dobroMeuArray.join(", ")} <br>Pares: ${pares.join(", ")}`;
    
});

//DESAFIO 2

const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 129.90 },
    { nome: "Tênis", preco: 299.90 },
    { nome: "Boné", preco: 39.90 },
    { nome: "Jaqueta", preco: 189.90 }
];

const primeiroMaiorQueCem = produtos.find((produto) => produto.preco > 100.00);

const botao2 = document.querySelector("#btn-desafio2");

const totalPrecos = produtos.reduce((acumulador, item) => acumulador + item.preco, 0);

const menorQueCem = produtos.filter((produto) => produto.preco < 100.00);

botao2.addEventListener("click", (event) => {
    event.preventDefault();

    const resultado2 = document.querySelector("#resultado2");

    resultado2.innerHTML = `O primeiro produto com preço maior que 100 é: ${primeiroMaiorQueCem.nome}<br>A soma dos preços é: ${totalPrecos}<br>Os produtos mais baratos são: ${menorQueCem.map((p) => p.nome).join(", ")}`;

});

//DESAFIO 3

const pessoa = { nome: "Gabriel", idade: 25, cidade: "BH", profissao: "Dev" };

const { nome, idade, cidade, profissao } = pessoa;

const cores = ["vermelho", "azul", "verde", "amarelo"];

const [ primeiro, segundo ] = cores; 

const botao3 = document.querySelector("#btn-desafio3");

const resultado3 = document.querySelector("#resultado3");

function apresentar( { nome, idade, cidade }) {
    resultado3.innerHTML += `<br>Apresentando com função: ${nome}, ${idade} e mora em ${cidade}`;
}

botao3.addEventListener("click", (event) => {
    event.preventDefault();

    resultado3.innerHTML = `nome: ${nome}, idade: ${idade}, cidade: ${cidade}`;
    resultado3.innerHTML += `<br>primeiro: ${primeiro}, segundo: ${segundo}`;

    apresentar(pessoa);
})

//DESAFIO 4

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Python", "Java"];

const fullstack = [...frontend, ...backend];

const botao4 = document.querySelector("#btn-desafio4");
const resultado4 = document.querySelector("#resultado4");

const usuario = { nome: "Gabriel", cidade: "BH", nivel: "iniciante" };

botao4.addEventListener("click", (event) => {
    event.preventDefault();

    resultado4.innerHTML = `A junção dos arrays é: ${fullstack.join(", ")}`;

    const usuarioAlterado = {...usuario, cidade: "Uberlândia"};

    resultado4.innerHTML += `<br>O objeto usuario teve sua cidade alterada para ${usuarioAlterado.cidade}`;

    const frontendAlterado = [...frontend, "TypeScript"];

    resultado4.innerHTML += `<br>O array <code>frontend</code> agora é: ${frontendAlterado.join(", ")}`;

})

//DESAFIO 5


const estudantes = ["Maria", "João", "Ana", "Carlos", "Beatriz"];

const botao5 = document.querySelector("#btn-desafio5");
const lista = document.querySelector("#lista-nomes");

botao5.addEventListener("click", (event) => {
    event.preventDefault();

    estudantes.forEach((estudante) => {
        const li = document.createElement("li");

        li.textContent += estudante;
        lista.appendChild(li);
    });
});

//DESAFIO 6

const alunos = ["Maria", "João", "Ana", "Carlos", "Beatriz"];

const listaRemovivel = document.querySelector("#lista-removivel");

const botao6 = document.querySelector("#btn-desafio6");

botao6.addEventListener("click", (event) => {
    event.preventDefault();

    alunos.forEach((aluno) => {
        const liRemovivel = document.createElement("li");

        liRemovivel.innerHTML += `<span>${aluno} <button class="btn-remover">X</button></span>`;
        listaRemovivel.appendChild(liRemovivel);
    });
});

listaRemovivel.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-remover")){
        event.target.closest("li").remove();
    }
});

//DESAFIO 7

const botaoAdicionar = document.querySelector("#btn-adicionar");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    
})
