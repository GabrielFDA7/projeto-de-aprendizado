// ========================================
// SCRIPT DE TREINO - Praticando DOM
// ========================================

// 1. ANO AUTOMÁTICO NO FOOTER
const footerAno = document.querySelector('#ano-footer');
const anoAtual = new Date().getFullYear();
footerAno.textContent = `© ${anoAtual} - Gabriel de Angelis`;

// 2. SAUDAÇÃO DINÂMICA
function getSaudacao() {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        return "☀️ Bom dia";
    } else if (hora >= 12 && hora < 18) {
        return "🌤️ Boa tarde";
    } else {
        return "🌙 Boa noite";
    }
}

console.log(`${getSaudacao()}, Gabriel! Hora de estudar! 📚`);

// 3. LINKS DA NAVEGAÇÃO - Evento de clique
const linksNav = document.querySelectorAll('nav a');

linksNav.forEach((link) => {
    link.addEventListener('click', () => {
        console.log(`Navegou para: ${link.textContent}`);
    });
});

// 4. CARDS INTERATIVOS - Eventos de hover
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.classList.add('card-hover');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('card-hover');
    });
});

// 5. CONTADOR DE SEÇÕES
const secoes = document.querySelectorAll('section');
console.log(`Esta página tem ${secoes.length} seções de conteúdo.`);

// 6. ARRAY DE TECNOLOGIAS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'Flexbox', 'Grid', 'DOM'];
console.log('Tecnologias estudadas:');
console.table(tecnologias);
