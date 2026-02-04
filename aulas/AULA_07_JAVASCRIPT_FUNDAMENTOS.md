# 📚 Aula 07: JavaScript - Fundamentos

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Entender o que é JavaScript e seu papel no desenvolvimento web
- Usar variáveis, tipos de dados e operadores
- Escrever seus primeiros scripts interativos
- Manipular o console do navegador para testes

---

## 📖 Teoria: O Que é JavaScript?

### A Tríade do Front-End

```
┌─────────────────────────────────────────────────────────┐
│                      WEBSITE                            │
├─────────────────┬─────────────────┬─────────────────────┤
│      HTML       │       CSS       │     JAVASCRIPT      │
│   (Estrutura)   │    (Visual)     │   (Comportamento)   │
│                 │                 │                     │
│   "O que é"     │  "Como parece"  │   "O que faz"       │
│                 │                 │                     │
│   Esqueleto     │     Roupa       │     Músculos        │
└─────────────────┴─────────────────┴─────────────────────┘
```

JavaScript é a linguagem que dá **vida** ao seu site:
- Responde a cliques e interações do usuário
- Valida formulários
- Anima elementos
- Busca dados de APIs
- Muito mais!

> 💡 **Analogia com VBA**: JavaScript está para o navegador assim como VBA está para o Excel. Ambos automatizam e adicionam interatividade à aplicação host!

---

## 🏗️ Como Adicionar JavaScript ao HTML

### 3 Formas (igual CSS!)

**1. Inline (NÃO recomendado):**
```html
<button onclick="alert('Clicou!')">Clique</button>
```

**2. Interno (OK para testes):**
```html
<script>
    console.log('Olá, mundo!');
</script>
```

**3. Externo (RECOMENDADO ✅):**
```html
<!-- No final do body, antes de </body> -->
<script src="script.js"></script>
```

> ⚠️ **Importante**: Coloque a tag `<script>` no **final do body**, antes de `</body>`. Isso garante que o HTML já carregou antes do JavaScript executar.

---

## 📚 Sintaxe Básica do JavaScript

### 1. Variáveis - Guardando Valores

Em JavaScript, usamos `let` e `const` para criar variáveis:

```javascript
// const = constante (não muda)
const nome = "Gabriel";
const anoNascimento = 2003;

// let = variável (pode mudar)
let idade = 22;
idade = 23;  // OK! let permite reatribuição

// NÃO USE var (antigo, tem problemas)
```

> 💡 **Analogia com VBA**: 
> - `const` é como `Const PI = 3.14` no VBA
> - `let` é como `Dim idade As Integer`

---

### 2. Tipos de Dados

```javascript
// String (texto) - entre aspas
const nome = "Gabriel";
const mensagem = 'Olá, mundo!';

// Number (número) - sem aspas
const idade = 22;
const altura = 1.75;

// Boolean (verdadeiro/falso)
const estudante = true;
const formado = false;

// Array (lista)
const habilidades = ["HTML", "CSS", "JavaScript"];

// Object (objeto)
const pessoa = {
    nome: "Gabriel",
    idade: 22,
    cidade: "Uberlândia"
};
```

---

### 3. Operadores

```javascript
// Aritméticos
let soma = 5 + 3;        // 8
let subtracao = 10 - 4;  // 6
let multiplicacao = 3 * 4; // 12
let divisao = 20 / 5;    // 4
let resto = 10 % 3;      // 1 (módulo)

// Comparação
5 === 5;   // true (igual - use sempre ===)
5 !== 3;   // true (diferente)
10 > 5;    // true (maior)
3 < 7;     // true (menor)
5 >= 5;    // true (maior ou igual)
4 <= 4;    // true (menor ou igual)

// Lógicos
true && true;   // true (E)
true || false;  // true (OU)
!true;          // false (NÃO)
```

> ⚠️ **IMPORTANTE**: Use sempre `===` (3 iguais) ao invés de `==` (2 iguais). O `===` compara valor E tipo, evitando bugs estranhos!

---

### 4. Console - Seu Melhor Amigo

O `console.log()` é como o `Debug.Print` do VBA. Usa para testar e debugar:

```javascript
const nome = "Gabriel";
console.log(nome);  // Mostra: Gabriel

const idade = 22;
console.log("Idade:", idade);  // Mostra: Idade: 22

console.log("2 + 2 =", 2 + 2);  // Mostra: 2 + 2 = 4
```

**Para ver o console:**
1. Aperte F12 no navegador
2. Clique na aba "Console"

---

## 🔍 Conceitos Novos Importantes

### Funções - Blocos de Código Reutilizáveis

```javascript
// Declarando uma função
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

// Chamando a função
saudacao("Gabriel");  // Mostra: Olá, Gabriel!
saudacao("Maria");    // Mostra: Olá, Maria!

// Função com retorno
function soma(a, b) {
    return a + b;
}

const resultado = soma(5, 3);  // resultado = 8
console.log(resultado);
```

> 💡 **Analogia com VBA**: Funções em JS são como `Function` no VBA. Recebem parâmetros e podem retornar valores.

---

### Condicionais - Tomando Decisões

```javascript
const idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Com else if
const nota = 7;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 7) {
    console.log("Aprovado!");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
```

---

### Template Literals - Strings Modernas

Ao invés de concatenar com `+`, use template literals (crase + ${}):

```javascript
const nome = "Gabriel";
const idade = 22;

// Jeito antigo (ruim)
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");

// Jeito moderno (muito melhor!)
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
```

> ⚠️ **Atenção**: Use crase ` ` ` ` (não aspas simples ou duplas!)

---

### Loops - Repetindo Código

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`);
}
// Mostra: 0, 1, 2, 3, 4

// For...of (para arrays)
const frutas = ["Maçã", "Banana", "Laranja"];

for (const fruta of frutas) {
    console.log(fruta);
}
// Mostra: Maçã, Banana, Laranja
```

---

## 🎮 Exercício Prático

### Sua Missão:
Criar seu primeiro arquivo JavaScript e praticar os fundamentos.

### Passo 1: Criar o arquivo
Crie um arquivo `script.js` na pasta `portfolio/`.

### Passo 2: Linkar no HTML
No seu `index.html`, antes de `</body>`:
```html
    <script src="script.js"></script>
</body>
```

### Passo 3: Escrever os exercícios

No arquivo `script.js`, complete:

**Exercício 1 - Variáveis:**
- [X] Crie uma constante `nomeCompleto` com seu nome
- [X] Crie uma constante `anoNascimento` com seu ano de nascimento
- [X] Crie uma variável `idade` calculada (2026 - anoNascimento)
- [X] Use `console.log` para mostrar: "Olá, [nome]! Você tem [idade] anos."

**Exercício 2 - Array:**
- [X] Crie um array `tecnologias` com pelo menos 5 tecnologias que você conhece
- [X] Use um loop `for...of` para mostrar cada tecnologia no console

**Exercício 3 - Função:**
- [X] Crie uma função `calcularIdade(anoNascimento)` que retorna a idade
- [X] Teste a função com diferentes anos

**Exercício 4 - Condicional:**
- [X] Crie uma função `verificarMaioridade(idade)` que retorna "Maior de idade" ou "Menor de idade"
- [X] Teste com diferentes idades

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [X] Criei o arquivo `script.js` na pasta `portfolio/`
- [X] Linkei o script no HTML antes de `</body>`
- [X] Consigo ver mensagens no console do navegador (F12)
- [X] Entendo a diferença entre `let` e `const`
- [X] Sei criar e chamar funções
- [X] Sei usar `if/else` para condicionais
- [X] Sei usar template literals com crase

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Script não executa | Verifique se o `src` está correto e se o arquivo está na mesma pasta |
| Erro "undefined" | A variável não foi declarada ou está com nome errado |
| Erro de sintaxe | Verifique ponto e vírgula, chaves e parênteses |
| Console não mostra nada | Verifique se está na aba Console do DevTools |
| Template literal não funciona | Use crase ` ` ` `, não aspas |

---

## 💡 Dica Extra: Atalhos do Console

| Atalho | O que faz |
|--------|-----------|
| `console.log()` | Mostra mensagem normal |
| `console.error()` | Mostra erro (vermelho) |
| `console.warn()` | Mostra aviso (amarelo) |
| `console.table()` | Mostra array/objeto como tabela |
| `console.clear()` | Limpa o console |

```javascript
console.table(["HTML", "CSS", "JS"]);
// Mostra uma tabela organizada!
```

---

## 📋 Comparação VBA vs JavaScript

| VBA | JavaScript |
|-----|------------|
| `Dim x As Integer` | `let x = 0` |
| `Const PI = 3.14` | `const PI = 3.14` |
| `If x > 5 Then` | `if (x > 5) {` |
| `End If` | `}` |
| `For i = 1 To 10` | `for (let i = 1; i <= 10; i++)` |
| `Next i` | `}` |
| `Function Soma(a, b)` | `function soma(a, b) {` |
| `Soma = a + b` | `return a + b` |
| `End Function` | `}` |
| `Debug.Print` | `console.log()` |
| `MsgBox` | `alert()` |

---

## ➡️ Próxima Aula

Na **Aula 08** vamos aprender sobre **DOM - Manipulando o HTML com JavaScript**! 🎯

Você vai aprender a:
- Selecionar elementos HTML com JavaScript
- Mudar textos, cores e estilos dinamicamente
- Responder a cliques e eventos do usuário
- Criar interatividade real no seu portfólio!

---

**Quando terminar os exercícios, me avise! Vou revisar seu código JavaScript!** 🚀
