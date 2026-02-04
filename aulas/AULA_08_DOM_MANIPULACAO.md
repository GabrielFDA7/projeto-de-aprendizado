# 📚 Aula 08: DOM - Manipulando HTML com JavaScript

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Entender o que é o DOM (Document Object Model)
- Selecionar elementos HTML usando JavaScript
- Modificar textos, estilos e atributos dinamicamente
- Responder a eventos do usuário (cliques, hover, etc.)
- Adicionar interatividade real ao seu portfólio

---

## 📖 Teoria: O Que é o DOM?

### O DOM é a Representação do HTML em JavaScript

Quando o navegador carrega seu HTML, ele cria uma estrutura em árvore que o JavaScript pode manipular:

```
                    document
                        │
                      <html>
                    /        \
               <head>        <body>
                  │         /   |   \
              <title>    <header> <main> <footer>
                              │      │
                           <nav>  <section>
```

> 💡 **Analogia com Excel/VBA**: O DOM é como a estrutura do Excel. Assim como no VBA você acessa `Worksheets("Plan1").Range("A1")`, no JavaScript você acessa `document.querySelector("#titulo")`.

---

## 🏗️ Selecionando Elementos

### Os 3 Métodos Principais

```javascript
// 1. querySelector - Retorna O PRIMEIRO elemento que bate com o seletor CSS
const titulo = document.querySelector("h1");
const meuId = document.querySelector("#meu-id");
const minhaClasse = document.querySelector(".minha-classe");

// 2. querySelectorAll - Retorna TODOS os elementos (NodeList)
const todosLinks = document.querySelectorAll("nav a");
const todosCards = document.querySelectorAll(".card");

// 3. getElementById - Só funciona com ID (mais antigo, mas ainda usado)
const elemento = document.getElementById("meu-id");
```

> ⚠️ **Importante**: `querySelector` usa a mesma sintaxe de seletores do CSS! Se você sabe CSS, já sabe selecionar no JS.

---

## 📚 Manipulando Elementos

### 1. `textContent` - Alterando Texto

```javascript
const titulo = document.querySelector("h1");

// Lendo o texto
console.log(titulo.textContent);  // "Gabriel de Angelis - Meu Portfólio"

// Alterando o texto
titulo.textContent = "Novo Título!";
```

---

### 2. `innerHTML` - Alterando HTML Interno

```javascript
const container = document.querySelector("#projetos");

// Lendo o HTML
console.log(container.innerHTML);

// Alterando (cuidado: pode sobrescrever conteúdo!)
container.innerHTML = "<p>Conteúdo <strong>novo</strong>!</p>";

// Adicionando ao final
container.innerHTML += "<p>Mais um parágrafo</p>";
```

> ⚠️ **Cuidado**: `innerHTML` pode criar vulnerabilidades de segurança se usado com dados do usuário. Para texto simples, prefira `textContent`.

---

### 3. `style` - Alterando CSS Inline

```javascript
const titulo = document.querySelector("h1");

// Alterando uma propriedade
titulo.style.color = "red";
titulo.style.fontSize = "48px";  // camelCase, não kebab-case!
titulo.style.backgroundColor = "yellow";

// Múltiplas propriedades
titulo.style.cssText = "color: blue; font-size: 32px; padding: 10px;";
```

> 💡 **Dica**: Propriedades CSS com hífen (`font-size`) viram camelCase (`fontSize`) no JavaScript.

---

### 4. `classList` - Manipulando Classes CSS

A forma mais elegante de alterar estilos:

```javascript
const elemento = document.querySelector(".card");

// Adicionar classe
elemento.classList.add("ativo");

// Remover classe
elemento.classList.remove("ativo");

// Alternar (toggle) - adiciona se não tem, remove se tem
elemento.classList.toggle("ativo");

// Verificar se tem a classe
if (elemento.classList.contains("ativo")) {
    console.log("Elemento está ativo!");
}
```

---

### 5. `setAttribute` / `getAttribute` - Atributos

```javascript
const link = document.querySelector("a");

// Lendo atributo
console.log(link.getAttribute("href"));  // "https://..."

// Alterando atributo
link.setAttribute("href", "https://novo-link.com");
link.setAttribute("target", "_blank");

// Atalhos para atributos comuns
link.href = "https://outro-link.com";
link.id = "meu-link";
```

---

## 🔥 Eventos - Respondendo ao Usuário

### Estrutura Básica

```javascript
elemento.addEventListener("evento", funcaoCallback);
```

### Eventos Mais Comuns

| Evento | Quando dispara |
|--------|----------------|
| `click` | Clique do mouse |
| `mouseover` | Mouse entra no elemento |
| `mouseout` | Mouse sai do elemento |
| `keydown` | Tecla pressionada |
| `submit` | Formulário enviado |
| `load` | Página carregou |
| `scroll` | Usuário rolou a página |

---

### Exemplo Prático: Clique

```javascript
const botao = document.querySelector("#meu-botao");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
    alert("Você clicou no botão!");
});

// Com arrow function (mais moderno)
botao.addEventListener("click", () => {
    console.log("Clicou com arrow function!");
});
```

---

### Exemplo: Hover (mouseover/mouseout)

```javascript
const card = document.querySelector(".card");

card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
});

card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
});
```

---

### O Objeto `event`

Quando um evento acontece, você recebe informações sobre ele:

```javascript
document.addEventListener("click", (event) => {
    console.log("Posição X:", event.clientX);
    console.log("Posição Y:", event.clientY);
    console.log("Elemento clicado:", event.target);
});

// Prevenindo comportamento padrão (ex: link não navegar)
const link = document.querySelector("a");
link.addEventListener("click", (event) => {
    event.preventDefault();  // Impede a navegação!
    console.log("Clicou no link, mas não navegou");
});
```

---

## 🔍 Conceitos Novos Importantes

### Iterando sobre NodeList

`querySelectorAll` retorna uma NodeList. Para aplicar algo em todos:

```javascript
const links = document.querySelectorAll("nav a");

// forEach - aplica função em cada elemento
links.forEach((link) => {
    link.style.color = "gold";
    
    link.addEventListener("click", () => {
        console.log(`Clicou em: ${link.textContent}`);
    });
});
```

> 💡 **Analogia com VBA**: É como um `For Each cell In Range("A1:A10")` no Excel!

---

### DOMContentLoaded - Esperar a Página Carregar

Para garantir que o HTML carregou antes de manipular:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    // Todo seu código aqui dentro!
    const titulo = document.querySelector("h1");
    titulo.textContent = "Carregou!";
});
```

> ⚠️ **Alternativa**: Se seu `<script>` está no final do body (recomendado), você geralmente não precisa disso.

---

## 🎮 Exercício Prático

### Sua Missão:
Adicionar interatividade ao seu portfólio usando DOM e eventos.

### Requisitos:

**1. Saudação Dinâmica:**
- [X] Crie uma função que mostra "Bom dia", "Boa tarde" ou "Boa noite" baseado na hora atual
- [X] Mostre essa saudação no console quando a página carregar
- [X] (Bônus) Adicione a saudação em algum lugar visível do site

**2. Links da Navegação:**
- [X] Selecione todos os links do `nav` usando `querySelectorAll`
- [X] Adicione um evento de clique que mostra no console qual link foi clicado

**3. Cards Interativos:**
- [X] Selecione os cards de projetos ou habilidades
- [X] Adicione efeito de hover que muda a aparência (scale, shadow, etc.)
- [X] Use `classList.add()` e `classList.remove()` ao invés de `style` diretamente

**4. Ano Automático no Footer:**
- [X] Selecione o elemento do footer que contém o ano
- [X] Use JavaScript para inserir o ano atual automaticamente

---

## 📋 Código Exemplo: Ano Automático

```javascript
// No seu script.js
const footerAno = document.querySelector("footer p");
const anoAtual = new Date().getFullYear();
footerAno.textContent = `© Gabriel de Angelis - ${anoAtual}`;
```

---

## 📋 Código Exemplo: Saudação por Horário

```javascript
function getSaudacao() {
    const hora = new Date().getHours();
    
    if (hora >= 5 && hora < 12) {
        return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

console.log(getSaudacao() + ", Gabriel!");
```

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [ ] Sei selecionar elementos com `querySelector` e `querySelectorAll`
- [ ] Sei alterar texto com `textContent`
- [ ] Sei adicionar/remover classes com `classList`
- [ ] Sei adicionar eventos com `addEventListener`
- [ ] O ano do footer é inserido automaticamente
- [ ] Os cards têm algum efeito interativo

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| `Cannot read property of null` | O elemento não existe ou o seletor está errado |
| Evento não funciona | Verifique se o script está no final do body |
| Estilo não aplica | Lembre-se: `fontSize` não `font-size` |
| querySelectorAll não funciona com forEach | Na dúvida, converta: `Array.from(nodeList)` |
| Alterações somem ao recarregar | Normal! JavaScript altera o DOM em memória |

---

## 💡 Dica Extra: DevTools para DOM

1. Abra DevTools (F12)
2. Na aba **Elements**, você pode:
   - Ver a estrutura HTML
   - Editar em tempo real
   - Ver quais estilos estão aplicados

3. Na aba **Console**, você pode:
   - Digitar `document.querySelector("h1")` e ver o elemento
   - Testar seletores antes de usar no código

---

## 📊 Resumo dos Métodos

| Método | O que faz | Exemplo |
|--------|-----------|---------|
| `querySelector()` | Seleciona 1 elemento | `document.querySelector("#id")` |
| `querySelectorAll()` | Seleciona todos | `document.querySelectorAll(".classe")` |
| `.textContent` | Lê/altera texto | `el.textContent = "Novo"` |
| `.innerHTML` | Lê/altera HTML | `el.innerHTML = "<b>Bold</b>"` |
| `.style` | Altera CSS inline | `el.style.color = "red"` |
| `.classList` | Manipula classes | `el.classList.add("ativo")` |
| `.addEventListener()` | Adiciona evento | `el.addEventListener("click", fn)` |

---

## ➡️ Próxima Aula

Na **Aula 09** vamos aprender sobre **Formulários e Validação com JavaScript**! 📝

Você vai aprender a:
- Capturar dados de formulários
- Validar campos antes de enviar
- Mostrar mensagens de erro/sucesso
- Criar um formulário de contato funcional!

---

**Quando terminar os exercícios, me avise! Vou revisar seu código e ver a interatividade funcionando!** 🚀
