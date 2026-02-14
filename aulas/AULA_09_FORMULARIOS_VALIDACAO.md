# 📚 Aula 09: Formulários e Validação com JavaScript

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Criar formulários HTML com campos adequados
- Capturar dados de formulários com JavaScript
- Validar campos antes de enviar (email, campos obrigatórios, etc.)
- Mostrar mensagens de erro/sucesso dinamicamente
- Prevenir envio de formulário inválido

---

## 📖 Teoria: Formulários HTML

### A Tag `<form>`

O formulário é o container que agrupa todos os campos de entrada:

```html
<form id="meu-form" action="/enviar" method="POST">
    <!-- campos aqui -->
</form>
```

**Atributos importantes:**
| Atributo | Função |
|----------|--------|
| `id` | Identificador para JavaScript |
| `action` | URL para onde enviar os dados |
| `method` | GET (na URL) ou POST (no corpo) |

> 💡 **Analogia com Excel/VBA**: Formulários HTML são como um UserForm do VBA - você coleta dados do usuário em campos organizados.

---

## 🏗️ Campos de Entrada (Inputs)

### Tipos de Input Mais Comuns

```html
<!-- Texto simples -->
<input type="text" id="nome" name="nome" placeholder="Seu nome">

<!-- Email (já tem validação básica!) -->
<input type="email" id="email" name="email" placeholder="seu@email.com">

<!-- Senha -->
<input type="password" id="senha" name="senha">

<!-- Número -->
<input type="number" id="idade" name="idade" min="1" max="120">

<!-- Telefone -->
<input type="tel" id="telefone" name="telefone">

<!-- Área de texto grande -->
<textarea id="mensagem" name="mensagem" rows="4"></textarea>

<!-- Botão de envio -->
<button type="submit">Enviar</button>
```

---

### Atributos Úteis dos Inputs

| Atributo | Função | Exemplo |
|----------|--------|---------|
| `placeholder` | Texto de dica dentro do campo | `placeholder="Digite seu nome"` |
| `required` | Campo obrigatório | `required` |
| `minlength` | Mínimo de caracteres | `minlength="3"` |
| `maxlength` | Máximo de caracteres | `maxlength="100"` |
| `pattern` | Regex para validação | `pattern="[0-9]{3}"` |
| `disabled` | Desabilita o campo | `disabled` |

> ⚠️ **Importante**: Sempre use `name` nos inputs! É como os dados são identificados ao enviar.

---

## 📚 Labels - Acessibilidade

### Por que usar Labels?

Labels conectam texto ao input, melhorando acessibilidade:

```html
<!-- Método 1: for + id -->
<label for="email">Seu Email:</label>
<input type="email" id="email" name="email">

<!-- Método 2: envolvendo o input -->
<label>
    Seu Nome:
    <input type="text" name="nome">
</label>
```

> 💡 **Dica**: Clicar no label foca o input automaticamente!

---

## 🔥 Capturando Dados com JavaScript

### Evento `submit`

O evento mais importante para formulários:

```javascript
const form = document.querySelector("#meu-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();  // IMPORTANTE: evita recarregar a página!
    
    // Capturar valores dos campos
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    
    console.log("Nome:", nome);
    console.log("Email:", email);
});
```

> ⚠️ **Crucial**: Sempre use `event.preventDefault()` para evitar que a página recarregue!

---

### Acessando Valores

```javascript
// Método 1: querySelector + .value
const nome = document.querySelector("#nome").value;

// Método 2: FormData (mais moderno e completo)
const form = document.querySelector("#meu-form");
const formData = new FormData(form);

const nome = formData.get("nome");
const email = formData.get("email");

// Pegar TODOS os dados de uma vez
const dados = Object.fromEntries(formData);
console.log(dados);  // { nome: "Gabriel", email: "gabriel@email.com", ... }
```

---

## ✅ Validação com JavaScript

### Validação Básica

```javascript
function validarFormulario(nome, email, mensagem) {
    // Array para guardar erros
    const erros = [];
    
    // Validar nome
    if (nome.trim() === "") {
        erros.push("Nome é obrigatório");
    } else if (nome.length < 3) {
        erros.push("Nome deve ter pelo menos 3 caracteres");
    }
    
    // Validar email
    if (email.trim() === "") {
        erros.push("Email é obrigatório");
    } else if (!email.includes("@")) {
        erros.push("Email inválido");
    }
    
    // Validar mensagem
    if (mensagem.trim() === "") {
        erros.push("Mensagem é obrigatória");
    }
    
    return erros;
}
```

> 💡 **Dica**: `.trim()` remove espaços em branco do início e fim - evita que usuário envie só espaços!

---

### Validação de Email com Regex

```javascript
function validarEmail(email) {
    // Regex básico para email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Uso
if (!validarEmail(email)) {
    console.log("Email inválido!");
}
```

---

## 📝 Mostrando Feedback ao Usuário

### Estrutura HTML para Mensagens

```html
<form id="contato-form">
    <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <span class="erro-msg" id="erro-nome"></span>
    </div>
    
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <span class="erro-msg" id="erro-email"></span>
    </div>
    
    <button type="submit">Enviar</button>
    <div id="mensagem-sucesso" class="sucesso hidden"></div>
</form>
```

---

### CSS para Feedback Visual

```css
.form-group {
    margin-bottom: 1rem;
}

.erro-msg {
    color: #dc3545;
    font-size: 0.85rem;
    display: block;
    margin-top: 0.25rem;
}

input.erro {
    border-color: #dc3545;
    background-color: #fff0f0;
}

input.valido {
    border-color: #28a745;
}

.sucesso {
    display: none;
    background: #d4edda;
    color: #155724;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
}

.hidden {
    display: none;
}
```

---

### JavaScript Completo

```javascript
const form = document.querySelector("#contato-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Limpar erros anteriores
    limparErros();
    
    // Capturar valores
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    
    // Validar
    let valido = true;
    
    if (nome.trim() === "") {
        mostrarErro("nome", "Nome é obrigatório");
        valido = false;
    } else if (nome.length < 3) {
        mostrarErro("nome", "Nome deve ter pelo menos 3 caracteres");
        valido = false;
    }
    
    if (!validarEmail(email)) {
        mostrarErro("email", "Email inválido");
        valido = false;
    }
    
    // Se válido, mostrar sucesso
    if (valido) {
        mostrarSucesso("Mensagem enviada com sucesso!");
        form.reset();  // Limpa o formulário
    }
});

function mostrarErro(campo, mensagem) {
    const input = document.querySelector(`#${campo}`);
    const erroSpan = document.querySelector(`#erro-${campo}`);
    
    input.classList.add("erro");
    erroSpan.textContent = mensagem;
}

function limparErros() {
    const inputs = document.querySelectorAll("input");
    const erros = document.querySelectorAll(".erro-msg");
    
    inputs.forEach(input => input.classList.remove("erro", "valido"));
    erros.forEach(erro => erro.textContent = "");
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mostrarSucesso(mensagem) {
    const sucesso = document.querySelector("#mensagem-sucesso");
    sucesso.textContent = mensagem;
    sucesso.classList.remove("hidden");
}
```

---

## 🔍 Conceitos Novos Importantes

### `.value` - Valor do Input

```javascript
const input = document.querySelector("#nome");

// Lendo o valor
console.log(input.value);  // "Gabriel"

// Alterando o valor
input.value = "Novo Nome";

// Limpando
input.value = "";
```

---

### `.reset()` - Limpar Formulário

```javascript
const form = document.querySelector("form");
form.reset();  // Limpa todos os campos para os valores iniciais
```

---

### Validação em Tempo Real

```javascript
const emailInput = document.querySelector("#email");

// Valida enquanto o usuário digita
emailInput.addEventListener("input", () => {
    if (validarEmail(emailInput.value)) {
        emailInput.classList.remove("erro");
        emailInput.classList.add("valido");
    } else {
        emailInput.classList.remove("valido");
        emailInput.classList.add("erro");
    }
});
```

---

## 🎮 Exercício Prático

### Sua Missão:
Criar um formulário de contato completo com validação JavaScript.

### Requisitos:

**HTML - Estrutura do Form:**
- [X] Criar um `<form id="contato-form">` em uma nova seção do portfólio
- [X] Campo Nome (input text, required)
- [X] Campo Email (input email, required)
- [X] Campo Mensagem (textarea, required)
- [X] Botão de Enviar
- [X] Spans para mensagens de erro abaixo de cada campo

**CSS - Estilização:**
- [X] Estilizar inputs com estados normal, erro e válido
- [X] Adicionar classe `.erro` com borda vermelha
- [X] Adicionar classe `.valido` com borda verde (opcional)
- [X] Estilizar mensagem de sucesso

**JavaScript - Validação:**
- [X] Capturar evento `submit` e usar `preventDefault()`
- [X] Validar nome: não vazio, mínimo 3 caracteres
- [X] Validar email: não vazio, formato válido
- [X] Validar mensagem: não vazia
- [X] Mostrar mensagens de erro específicas
- [X] Mostrar mensagem de sucesso se tudo válido
- [X] Limpar formulário após sucesso com `.reset()`

**Bônus:**
- [ ] Validação em tempo real (evento `input`)
- [ ] Contador de caracteres na mensagem

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [ ] Sei criar formulários HTML com labels e inputs apropriados
- [ ] Sei capturar dados com `.value` e `FormData`
- [ ] Sei usar `event.preventDefault()` no submit
- [ ] Sei validar campos vazios e formatos (email)
- [ ] Sei mostrar mensagens de erro dinamicamente
- [ ] Sei limpar formulário com `.reset()`

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Página recarrega ao enviar | Faltou `event.preventDefault()` |
| `.value` retorna undefined | O seletor está errado ou o elemento não existe |
| Validação não funciona | Verifique se está usando `.trim()` |
| Erro some muito rápido | Valide no evento `submit`, não no `click` do botão |
| Input não é encontrado | Verifique se o `id` no HTML bate com o seletor |

---

## 💡 Dica Extra: Atributos de Validação HTML

O HTML5 já tem validação nativa! Use junto com JavaScript:

```html
<input type="email" required minlength="5" maxlength="50">
```

O navegador já mostra mensagens de erro! Mas JavaScript permite:
- Mensagens personalizadas
- Lógica mais complexa
- Validação em tempo real
- Visual customizado

---

## 📊 Resumo dos Métodos

| Método/Propriedade | O que faz | Exemplo |
|--------------------|-----------|---------|
| `.value` | Lê/altera valor do input | `input.value` |
| `event.preventDefault()` | Impede ação padrão | No submit |
| `.trim()` | Remove espaços extras | `nome.trim()` |
| `.reset()` | Limpa formulário | `form.reset()` |
| `FormData` | Captura todos os campos | `new FormData(form)` |
| `regex.test()` | Testa padrão | `regex.test(email)` |

---

## ➡️ Próxima Aula

Na **Aula 10** vamos aprender sobre **Local Storage e Persistência de Dados**! 💾

Você vai aprender a:
- Salvar dados no navegador do usuário
- Recuperar dados após fechar a página
- Criar funcionalidades que "lembram" preferências
- Implementar um sistema de favoritos ou lista de tarefas persistente!

---

**Quando terminar o formulário de contato, me avise! Vou revisar a validação e testar se está funcionando corretamente!** 🚀
