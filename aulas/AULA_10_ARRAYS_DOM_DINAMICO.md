# 📚 Aula 10: Arrays, JS Moderno e DOM Dinâmico

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Usar `map`, `filter`, `find` e `reduce` para transformar e filtrar arrays
- Extrair valores de objetos e arrays usando destructuring
- Copiar e combinar dados sem mutação usando spread operator (`...`)
- Criar e remover elementos HTML dinamicamente com JavaScript
- Usar Event Delegation para gerenciar eventos de forma eficiente

---

## 📖 Teoria: Métodos de Array

### O Problema

Até agora, quando você precisava percorrer um array, usava `forEach`:

```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((n) => console.log(n));
```

`forEach` é bom para **executar ações**, mas e quando você quer **transformar** o array? Criar um novo array com os valores alterados? Filtrar só alguns itens? Para isso existem `map`, `filter`, `find` e `reduce`.

> 💡 **Analogia**: Pense em uma esteira de fábrica. O array original entra de um lado, e do outro sai um array novo — transformado (`map`), filtrado (`filter`), ou resumido em um único valor (`reduce`).

---

## 🏗️ Visão Geral dos Métodos

```
┌──────────────────────────────────────────────────────────────────┐
│  Array Original: [3, 7, 12, 5, 20, 8]                           │
│                                                                  │
│  .forEach()  → Percorre. Não retorna nada.                      │
│  .map()      → Transforma cada item. Retorna novo array.        │
│  .filter()   → Filtra itens. Retorna novo array (menor ou =).   │
│  .find()     → Busca UM item. Retorna o primeiro que passar.    │
│  .reduce()   → Acumula tudo. Retorna UM valor (número, string). │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📚 Sintaxe de Cada Método

### 1. `map()` - Transformar Cada Item

Cria um **novo array** aplicando uma função em cada item:

```javascript
const numeros = [3, 7, 12, 5, 20];

// Dobro de cada número
const dobros = numeros.map((numero) => numero * 2);
console.log(dobros);    // [6, 14, 24, 10, 40]
console.log(numeros);   // [3, 7, 12, 5, 20]  ← original intacto!
```

Outro exemplo com strings:
```javascript
const nomes = ["maria", "joão", "ana"];
const maiusculos = nomes.map((nome) => nome.toUpperCase());
// ["MARIA", "JOÃO", "ANA"]
```

> ⚠️ **Importante**: `map` **sempre** retorna um array do **mesmo tamanho** que o original. Ele transforma, nunca remove.

---

### 2. `filter()` - Filtrar Itens

Cria um **novo array** só com os itens que passam numa condição:

```javascript
const numeros = [3, 7, 12, 5, 20, 8];

// Só os pares
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);  // [12, 20, 8]

// Só maiores que 10
const grandes = numeros.filter((numero) => numero > 10);
console.log(grandes);  // [12, 20]
```

Com objetos:
```javascript
const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 129.90 },
    { nome: "Boné", preco: 39.90 }
];

const baratos = produtos.filter((produto) => produto.preco < 100);
// [{ nome: "Camiseta", preco: 49.90 }, { nome: "Boné", preco: 39.90 }]
```

> 💡 **Dica**: A condição dentro do `filter` deve retornar `true` (mantém) ou `false` (remove).

---

### 3. `find()` - Encontrar UM Item

Retorna o **primeiro item** que passa na condição (não um array, um item só!):

```javascript
const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 129.90 },
    { nome: "Tênis", preco: 299.90 }
];

// Primeiro produto acima de R$100
const caro = produtos.find((produto) => produto.preco > 100);
console.log(caro);  // { nome: "Calça", preco: 129.90 }

// Se não achar ninguém, retorna undefined
const gratis = produtos.find((produto) => produto.preco === 0);
console.log(gratis);  // undefined
```

> ⚠️ **find vs filter**: `find` retorna **um objeto**. `filter` retorna **um array**. Se você precisa de todos os resultados, use `filter`. Se precisa só do primeiro, use `find`.

---

### 4. `reduce()` - Acumular em Um Valor

"Reduz" todo o array a um **único valor** (soma, contagem, string, etc.):

```javascript
const numeros = [10, 20, 30, 40];

// Somar todos
const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);  // 100
```

Como funciona passo a passo:

```
Início: acumulador = 0 (valor inicial)

Passo 1: acumulador (0) + numero (10) = 10
Passo 2: acumulador (10) + numero (20) = 30
Passo 3: acumulador (30) + numero (30) = 60
Passo 4: acumulador (60) + numero (40) = 100

Resultado: 100
```

Exemplo prático — soma de preços:
```javascript
const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 129.90 },
    { nome: "Tênis", preco: 299.90 }
];

const total = produtos.reduce((soma, produto) => soma + produto.preco, 0);
console.log(total.toFixed(2));  // "479.70"
```

> 💡 **Dica**: O `0` no final é o valor inicial do acumulador. Sem ele, o primeiro item do array é usado como valor inicial, o que pode causar bugs com objetos.

---

## 🔍 Conceitos Novos Importantes

### Destructuring (Desestruturação)

Atalho para **extrair valores** de objetos e arrays em variáveis separadas:

**Passo 1**: Destructuring de Objeto
```javascript
const pessoa = { nome: "Gabriel", idade: 25, cidade: "BH" };

// ❌ Modo antigo:
const nome = pessoa.nome;
const idade = pessoa.idade;

// ✅ Destructuring:
const { nome, idade, cidade } = pessoa;
console.log(nome);    // "Gabriel"
console.log(idade);   // 25
```

**Passo 2**: Destructuring de Array
```javascript
const cores = ["vermelho", "azul", "verde", "amarelo"];

// ✅ Pega pela POSIÇÃO:
const [primeira, segunda] = cores;
console.log(primeira);  // "vermelho"
console.log(segunda);   // "azul"

// Pular itens com vírgula:
const [, , terceira] = cores;
console.log(terceira);  // "verde"
```

**Passo 3**: Destructuring em Funções
```javascript
// Em vez de acessar objeto.propriedade dentro da função:
function apresentar({ nome, profissao }) {
    return `${nome} é ${profissao}`;
}

const pessoa = { nome: "Gabriel", profissao: "Dev", idade: 25 };
console.log(apresentar(pessoa));  // "Gabriel é Dev"
```

> 💡 **Analogia**: Pense num pacote. Em vez de abrir e tirar item por item, o destructuring "abre" tudo de uma vez e distribui nas variáveis certas.

---

### Spread Operator (`...`)

"Espalha" o conteúdo de um array ou objeto. É o oposto do destructuring — em vez de extrair, ele **distribui**:

**Combinar Arrays:**
```javascript
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Python"];

const todas = [...frontend, ...backend];
// ["HTML", "CSS", "JavaScript", "Node.js", "Python"]
```

**Adicionar Item sem Mutar:**
```javascript
const frutas = ["maçã", "banana"];

// ❌ push altera o original:
frutas.push("uva");

// ✅ spread cria novo array:
const novasFrutas = [...frutas, "uva"];
```

**Copiar e Modificar Objeto:**
```javascript
const usuario = { nome: "Gabriel", cidade: "BH", nivel: "iniciante" };

// Copia tudo e muda só o que precisa:
const atualizado = { ...usuario, nivel: "intermediário" };
// { nome: "Gabriel", cidade: "BH", nivel: "intermediário" }
```

> ⚠️ **Regra**: No React, **nunca** mude o estado diretamente. Sempre use spread para criar uma cópia modificada. Aprenda esse hábito agora!

---

### `createElement` + `appendChild` - DOM Dinâmico

Até agora você mexeu em elementos que **já existiam** no HTML. Agora vai **criar elementos do zero** com JavaScript:

**Passo 1**: Criar o elemento
```javascript
const li = document.createElement("li");
```

**Passo 2**: Configurar o elemento
```javascript
li.textContent = "Novo item";
li.classList.add("minha-classe");
```

**Passo 3**: Adicionar na página
```javascript
const lista = document.querySelector("#minha-lista");
lista.appendChild(li);
```

Exemplo completo — gerar lista a partir de array:
```javascript
const nomes = ["Maria", "João", "Ana"];
const lista = document.querySelector("#lista");

nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
});
```

> ⚠️ **Importante**: O elemento só aparece na tela **depois** do `appendChild`. Antes disso, ele existe apenas na memória do JavaScript.

---

### `remove()` + Event Delegation

**Remover elementos:**
```javascript
const item = document.querySelector("#meu-item");
item.remove();  // Poof! Sumiu da página.
```

**Event Delegation — o padrão profissional:**

Em vez de colocar um evento em cada botão, coloque **um evento no pai** e verifique quem foi clicado:

```javascript
// ❌ Um evento por botão (ineficiente com muitos itens):
botao1.addEventListener("click", remover);
botao2.addEventListener("click", remover);
botao3.addEventListener("click", remover);

// ✅ Um evento no pai (Event Delegation):
lista.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-remover")) {
        event.target.closest("li").remove();
    }
});
```

Conceitos-chave:
- `event.target` → o elemento exato que foi clicado
- `.closest("li")` → sobe no DOM até encontrar o `<li>` ancestral mais próximo
- Funciona para itens que **ainda nem existem** (criados depois via `createElement`)

> 💡 **Dica**: Event Delegation é como ter um "segurança na porta" que verifica quem está entrando, em vez de um segurança para cada pessoa.

---

## 📊 Resumo dos Métodos

| Método | Entrada | Saída | Exemplo |
|--------|---------|-------|---------|
| `forEach()` | Array | Nada (`undefined`) | Percorrer e executar |
| `map()` | Array | Novo array (mesmo tamanho) | Dobrar valores |
| `filter()` | Array | Novo array (menor ou igual) | Só os pares |
| `find()` | Array | Um item (ou `undefined`) | Primeiro acima de 100 |
| `reduce()` | Array | Um valor (qualquer tipo) | Somar preços |
| `createElement()` | String | Elemento HTML | Criar `<li>` |
| `appendChild()` | Elemento | — | Colocar na página |
| `remove()` | — | — | Remover da página |

---

## 🔗 Encadeamento (Chaining)

Você pode combinar métodos em sequência — a saída de um vira entrada do próximo:

```javascript
const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 129.90 },
    { nome: "Tênis", preco: 299.90 },
    { nome: "Boné", preco: 39.90 }
];

// Pegar nomes dos produtos abaixo de R$100:
const nomesBaratos = produtos
    .filter((p) => p.preco < 100)      // filtra baratos
    .map((p) => p.nome);               // extrai só os nomes

console.log(nomesBaratos);  // ["Camiseta", "Boné"]
```

> 💡 **Dica**: Isso funciona porque `filter` retorna um array, e `map` funciona sobre arrays. A saída de um método "encaixa" na entrada do próximo.

---

## 🎮 Exercício Prático

### Sua Missão:
Completar os 7 desafios no arquivo `treino/arrays-dom.html`. Escreva seu código no arquivo `treino/arrays-dom.js`.

### Requisitos:

**Métodos de Array (Desafios 1-2):**
- [ ] Usar `map` para transformar array de números
- [ ] Usar `filter` para filtrar array de números
- [ ] Usar `find` para buscar produto por condição
- [ ] Usar `reduce` para somar preços de produtos
- [ ] Encadear `filter` + `map` em uma operação

**JS Moderno (Desafios 3-4):**
- [ ] Aplicar destructuring em objetos
- [ ] Aplicar destructuring em arrays
- [ ] Usar destructuring no parâmetro de uma função
- [ ] Combinar arrays com spread (`...`)
- [ ] Copiar e modificar objetos com spread

**DOM Dinâmico (Desafios 5-7):**
- [ ] Criar `<li>` com `createElement` e adicionar com `appendChild`
- [ ] Adicionar botão de remover em cada item
- [ ] Implementar Event Delegation na `<ul>`
- [ ] Criar uma To-Do List completa que:
  - [ ] Adiciona tarefas com input + botão
  - [ ] Adiciona tarefas com a tecla Enter
  - [ ] Remove tarefas com botão "✕"
  - [ ] Marca tarefas como concluídas ao clicar
  - [ ] Mostra contador de tarefas pendentes

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [ ] Sei a diferença entre `forEach`, `map`, `filter`, `find` e `reduce`
- [ ] Sei usar destructuring para extrair valores de objetos e arrays
- [ ] Sei usar spread (`...`) para copiar e combinar sem mutar
- [ ] Sei criar e remover elementos HTML com JavaScript
- [ ] Sei usar Event Delegation em vez de um evento por elemento
- [ ] Consegui criar a To-Do List completa

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| `map` retorna `undefined` em cada posição | Faltou o `return` na arrow function (ou `{}` sem return) |
| `find` retorna `undefined` | Nenhum item passou na condição — verifique o teste |
| `reduce` retorna `NaN` | Esqueceu o valor inicial (o `0` no final) |
| Destructuring dá `undefined` | O nome da variável não corresponde à chave do objeto |
| `appendChild` não mostra nada | O elemento pai (`<ul>`) não foi selecionado corretamente |
| Evento não funciona em itens novos | Use Event Delegation no pai, não eventos individuais |

---

## 💡 Dica Extra: Arrow Functions e Retorno Implícito

Quando a arrow function tem **uma linha só**, você pode omitir `{}` e `return`:

```javascript
// Com chaves → precisa de return
const dobros = numeros.map((n) => { return n * 2; });

// Sem chaves → return implícito (mais limpo)
const dobros = numeros.map((n) => n * 2);

// Ambos fazem a mesma coisa!
```

Mas cuidado: se precisar de **mais de uma linha**, use `{}` e `return` explícito:

```javascript
const resultado = numeros.map((n) => {
    const dobro = n * 2;
    const formatado = `Número: ${dobro}`;
    return formatado;
});
```

---

## ➡️ Próxima Aula

Na **Aula 11** vamos aprender sobre **JavaScript Assíncrono — Fetch e APIs**! 🌐

Você vai aprender a:
- Entender a diferença entre código síncrono e assíncrono
- Usar `fetch` para buscar dados da internet
- Trabalhar com Promises e `async/await`
- Consumir APIs públicas e exibir dados na tela
- Criar um mini projeto que consome uma API real!

---

**Quando terminar os 7 desafios, me avise! Vou revisar seu código e verificar se está tudo funcionando!** 🚀
