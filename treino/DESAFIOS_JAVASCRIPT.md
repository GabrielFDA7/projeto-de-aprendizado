# 🎯 Desafios de JavaScript

Estes desafios são baseados no que você aprendeu nas **Aulas 07 e 08**. Complete-os para fixar o conteúdo!

---

## 📋 Instruções

1. Crie um arquivo `desafios.js` na pasta `treino/`
2. Resolva cada desafio e teste no console do navegador (F12)
3. Marque com [X] quando completar cada um

---

## 🟢 Nível Fácil - Fundamentos

### Desafio 1: Variáveis e Console
- [X] Crie uma constante `meuNome` com seu nome
- [X] Crie uma constante `anoNascimento` com seu ano de nascimento
- [X] Crie uma variável `idadeAtual` calculada (2026 - anoNascimento)
- [X] Use `console.log()` para mostrar: "Olá, [nome]! Você tem [idade] anos."
- [X] Use **template literals** (crase ``) para a mensagem

```javascript
// Exemplo esperado no console:
// "Olá, Gabriel! Você tem 22 anos."
```

---

### Desafio 2: Array e Loop
- [X] Crie um array `minhasTecnologias` com pelo menos 6 tecnologias que você conhece
- [X] Use um loop `for...of` para mostrar cada tecnologia no console
- [X] Use `console.table()` para exibir o array como tabela

```javascript
// Exemplo de saída:
// HTML
// CSS
// JavaScript
// (tabela com todas as tecnologias)
```

---

### Desafio 3: Função Simples
- [X] Crie uma função `dobrar(numero)` que retorna o dobro do número
- [X] Teste com os valores: 5, 10, 25
- [X] Mostre os resultados no console

```javascript
// Exemplo:
// dobrar(5) deve retornar 10
```

---

### Desafio 4: Condicional
- [X] Crie uma função `verificarParOuImpar(numero)` 
- [X] Deve retornar "Par" se o número for par, "Ímpar" se for ímpar
- [X] **Dica**: Use o operador `%` (resto da divisão)
- [X] Teste com: 4, 7, 10, 15

```javascript
// Exemplo:
// verificarParOuImpar(4) deve retornar "Par"
// verificarParOuImpar(7) deve retornar "Ímpar"
```

---

## 🟡 Nível Médio - DOM Básico

### Desafio 5: Selecionando Elementos
- [X] Selecione o `<h1>` da página de treino usando `querySelector`
- [X] Mostre o texto do `<h1>` no console usando `.textContent`
- [X] Conte quantos cards existem na página (use `querySelectorAll` e `.length`)

```javascript
// Exemplo:
// console.log(titulo.textContent);
// "📚 Meu Resumo de Estudos"
```

---

### Desafio 6: Alterando Texto
- [X] Selecione o elemento do footer com id `ano-footer`
- [X] Mude o texto para incluir seu nome: "© [ano] - [seu nome]"
- [X] Use `new Date().getFullYear()` para pegar o ano atual

---

### Desafio 7: Alterando Estilos
- [X] Selecione o primeiro card da página
- [X] Mude a cor do fundo para `#e6f3ff` (azul claro)
- [X] Mude a cor da borda esquerda para `#ff6b6b` (vermelho)
- [X] Use `.style.backgroundColor` e `.style.borderLeftColor`

---

### Desafio 8: Manipulando Classes
- [X] Crie uma classe CSS chamada `.destaque-amarelo` com:
  - `background-color: #fff3cd`
  - `border-left-color: #ffc107`
- [X] Selecione todos os cards com `.querySelectorAll`
- [X] Use um loop para adicionar a classe `.destaque-amarelo` ao 2º e 4º cards
- [X] **Dica**: Lembre que arrays começam no índice 0!

---

## 🔴 Nível Difícil - DOM e Eventos

### Desafio 9: Evento de Clique
- [X] Selecione TODOS os links do nav
- [X] Adicione um evento de clique que:
  - Muda a cor de fundo do link clicado para branco
  - Muda a cor do texto para `#1a1a2e`
- [X] Use `.forEach()` para adicionar o evento em todos os links

---

### Desafio 10: Toggle de Classe
- [X] Crie um botão "Modo Escuro" no footer (pode adicionar via HTML ou JS)
- [X] Ao clicar, deve alternar uma classe `modo-escuro` no `<body>`
- [X] Crie estilos CSS para `.modo-escuro`:
  - `background: #1a1a2e`
  - `color: white`
- [X] Use `.classList.toggle()` para alternar

```javascript
// Exemplo de estrutura:
botao.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
});
```

---

### Desafio 11: Contador de Cliques
- [X] Crie uma variável `contadorCliques` iniciando em 0
- [X] Adicione um evento de clique em toda a página (`document`)
- [X] A cada clique, incremente o contador e mostre no console
- [X] Quando chegar a 10 cliques, mostre "Você clicou 10 vezes! 🎉"

---

### Desafio 12: Saudação Dinâmica Avançada
- [X] Crie uma função `getSaudacaoCompleta()` que retorna:
  - "☀️ Bom dia! Hora de codar!" (5h às 11h)
  - "🌤️ Boa tarde! Continue focado!" (12h às 17h)
  - "🌙 Boa noite! Não se esforce demais!" (18h às 4h)
- [X] Use `new Date().getHours()` para pegar a hora atual
- [X] Adicione a saudação como texto no subtítulo do header

---

## 🏆 Desafio Bônus - Projeto Mini

### Desafio 13: Lista de Tarefas Simples
Crie uma mini lista de tarefas usando só o que você aprendeu:

- [X] Crie um array `tarefas` com 3 tarefas iniciais
- [X] Crie uma função `mostrarTarefas()` que:
  - Seleciona um elemento da página (pode criar um `<div id="lista-tarefas">`)
  - Limpa o `innerHTML`
  - Usa um loop para adicionar cada tarefa como `<p>`
- [X] Crie uma função `adicionarTarefa(texto)` que:
  - Adiciona o texto ao array `tarefas`
  - Chama `mostrarTarefas()` para atualizar a tela
- [X] Teste adicionando tarefas pelo console

```javascript
// Exemplo de uso:
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer os desafios");
```

---

## ✅ Checklist de Progresso

| Nível | Desafios Completos |
|-------|-------------------|
| 🟢 Fácil | [ ] 1 [ ] 2 [ ] 3 [ ] 4 |
| 🟡 Médio | [ ] 5 [ ] 6 [ ] 7 [ ] 8 |
| 🔴 Difícil | [ ] 9 [ ] 10 [ ] 11 [ ] 12 |
| 🏆 Bônus | [ ] 13 |

---

## 💡 Dicas Gerais

1. **Teste sempre no console** - Use F12 para abrir o DevTools
2. **Leia os erros** - Eles dizem exatamente o que está errado
3. **Quebre em partes** - Se um desafio é difícil, divida em passos menores
4. **Use console.log()** - Para debugar e entender o que está acontecendo
5. **Não copie, digite** - Digitar ajuda a memorizar

---

## 📚 Referência Rápida

```javascript
// Seleção
document.querySelector("seletor");
document.querySelectorAll("seletor");

// Texto
elemento.textContent = "texto";

// Estilos
elemento.style.propriedade = "valor";

// Classes
elemento.classList.add("classe");
elemento.classList.remove("classe");
elemento.classList.toggle("classe");

// Eventos
elemento.addEventListener("click", () => { });

// Loop em NodeList
elementos.forEach((el) => { });
```

---

**Boa sorte! Quando terminar os desafios, me avise para revisar! 🚀**
