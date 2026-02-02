# 📚 Aula 04: CSS Flexbox - Layout Moderno

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Entender o que é Flexbox e quando usar
- Usar `display: flex` para criar layouts
- Controlar direção, alinhamento e distribuição de elementos
- Aplicar Flexbox no seu portfólio para melhorar a navegação

---

## 📖 Teoria: O que é Flexbox?

### O Problema que o Flexbox Resolve

Antes do Flexbox, centralizar elementos ou colocá-los lado a lado era um pesadelo. Usávamos `float`, `position`, e truques estranhos.

**Flexbox** (Flexible Box Layout) é um sistema de layout CSS que permite:
- Alinhar elementos facilmente (horizontal e vertical)
- Distribuir espaço entre elementos
- Reordenar elementos sem mudar o HTML
- Criar layouts responsivos com pouco código

> 💡 **Analogia com Excel**: Imagine o Flexbox como "Mesclar e Centralizar" do Excel, mas com superpoderes. Você define uma área (container) e os elementos dentro (itens) se organizam automaticamente.

---

## 🏗️ Conceitos Fundamentais

### Container e Items

O Flexbox funciona com dois tipos de elementos:

```
┌─────────────────────────────────────────────────────────┐
│                    FLEX CONTAINER                       │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐              │
│   │  ITEM   │   │  ITEM   │   │  ITEM   │              │
│   │   1     │   │   2     │   │   3     │              │
│   └─────────┘   └─────────┘   └─────────┘              │
└─────────────────────────────────────────────────────────┘
```

- **Container**: O elemento pai que usa `display: flex`
- **Items**: Os filhos diretos do container

**No HTML:**
```html
<nav>                    <!-- Este é o CONTAINER -->
    <a href="#">Link 1</a>   <!-- ITEM -->
    <a href="#">Link 2</a>   <!-- ITEM -->
    <a href="#">Link 3</a>   <!-- ITEM -->
</nav>
```

**No CSS:**
```css
nav {
    display: flex;  /* Ativa o Flexbox no container */
}
```

> ⚠️ **Importante**: `display: flex` é aplicado no **PAI**, não nos filhos!

---

## 📚 Propriedades do Container (Pai)

### 1. `display: flex` - Ativa o Flexbox

```css
.container {
    display: flex;
}
```

Sem isso, nada funciona!

---

### 2. `flex-direction` - Direção dos Items

Define se os items ficam em **linha** (horizontal) ou **coluna** (vertical).

```css
.container {
    display: flex;
    flex-direction: row;      /* Padrão: horizontal → */
    flex-direction: column;   /* Vertical ↓ */
}
```

```
row (padrão):              column:
┌───┬───┬───┐              ┌───┐
│ 1 │ 2 │ 3 │              │ 1 │
└───┴───┴───┘              ├───┤
                           │ 2 │
                           ├───┤
                           │ 3 │
                           └───┘
```

---

### 3. `justify-content` - Alinhamento no Eixo Principal

Controla como os items são distribuídos **horizontalmente** (se `flex-direction: row`).

```css
.container {
    display: flex;
    justify-content: flex-start;    /* Início (padrão) */
    justify-content: center;        /* Centro */
    justify-content: flex-end;      /* Final */
    justify-content: space-between; /* Espaço entre items */
    justify-content: space-around;  /* Espaço ao redor */
    justify-content: space-evenly;  /* Espaço igual */
}
```

```
flex-start:        center:          flex-end:
┌───┬───┬───      ┐    ┌───┬───┬───┐        ┌───┬───┬───┐
│ 1 │ 2 │ 3 │     │    │ 1 │ 2 │ 3 │        │   │ 1 │ 2 │ 3 │
└───┴───┴─────────┘    └───┴───┴───┘        └───┴───┴───┘

space-between:     space-around:    space-evenly:
┌───┬─────┬───┐    ┌──┬───┬───┬──┐  ┌───┬───┬───┬───┐
│ 1 │     │ 3 │    │  │ 1 │ 2 │ 3 │  │   │ 1 │ 2 │ 3 │   │
└───┴─────┴───┘    └──┴───┴───┴──┘  └───┴───┴───┴───┘
```

> 💡 **Dica**: `space-between` é perfeito para navbars! O primeiro item fica na esquerda, o último na direita.

---

### 4. `align-items` - Alinhamento no Eixo Cruzado

Controla o alinhamento **vertical** dos items (se `flex-direction: row`).

```css
.container {
    display: flex;
    align-items: stretch;     /* Estica para preencher (padrão) */
    align-items: flex-start;  /* Topo */
    align-items: center;      /* Centro */
    align-items: flex-end;    /* Base */
}
```

```
flex-start:        center:          flex-end:
┌───┬───┬───┐      ┌───────────┐    ┌───────────┐
│ 1 │ 2 │ 3 │      │           │    │           │
├───┴───┴───┤      ├───┬───┬───┤    │           │
│           │      │ 1 │ 2 │ 3 │    ├───┬───┬───┤
└───────────┘      └───┴───┴───┘    │ 1 │ 2 │ 3 │
                                    └───┴───┴───┘
```

---

### 5. `gap` - Espaço Entre Items

Adiciona espaço entre os items (mais fácil que usar margin!).

```css
.container {
    display: flex;
    gap: 20px;        /* Espaço de 20px entre todos os items */
    gap: 10px 20px;   /* 10px vertical, 20px horizontal */
}
```

> 💡 **Dica**: `gap` é mais moderno e limpo do que usar `margin` nos items!

---

## 🔥 Receita: Centralizando Perfeitamente

O combo mais usado do Flexbox - centralizar algo horizontal E verticalmente:

```css
.container {
    display: flex;
    justify-content: center;  /* Centraliza horizontalmente */
    align-items: center;      /* Centraliza verticalmente */
    height: 100vh;            /* Ocupa toda a altura da tela */
}
```

Isso resolve aquele problema clássico de centralizar uma div!

---

## 📚 Propriedades dos Items (Filhos)

### 1. `flex-grow` - Crescer para Preencher

Permite que um item cresça para ocupar espaço disponível.

```css
.item {
    flex-grow: 1;  /* Cresce igualmente */
}

.item-especial {
    flex-grow: 2;  /* Cresce o dobro */
}
```

---

### 2. `flex-shrink` - Encolher se Necessário

Permite que um item encolha se não houver espaço.

```css
.item {
    flex-shrink: 1;  /* Pode encolher (padrão) */
    flex-shrink: 0;  /* NÃO encolhe */
}
```

---

### 3. `align-self` - Alinhamento Individual

Sobrescreve o `align-items` do container para um item específico.

```css
.item-especial {
    align-self: flex-end;  /* Só este item fica no final */
}
```

---

## 🎮 Exercício Prático

### Sua Missão:
Aplicar Flexbox no seu portfólio para melhorar o layout.

### Requisitos:

**Navegação (nav):**
- [x] Aplicar `display: flex` no `nav`
- [X] Usar `justify-content` para distribuir os links
- [X] Adicionar `gap` entre os links (substitui o `margin-right`)

**Header:**
- [X] Usar Flexbox para organizar o conteúdo do header
- [X] Centralizar verticalmente o conteúdo

**Seção de Habilidades ou Projetos:**
- [X] Criar um layout com items lado a lado usando Flexbox
- [X] Usar `flex-wrap: wrap` para quebrar linha em telas pequenas

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [X] O `nav` usa `display: flex`
- [X] Os links estão bem distribuídos com `justify-content` ou `gap`
- [X] Você entende a diferença entre `justify-content` e `align-items`
- [X] O site continua funcionando corretamente após as mudanças
- [X] Você testou redimensionar a janela para ver o comportamento

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Flexbox não funciona | Verifique se `display: flex` está no **pai**, não nos filhos |
| Items não centralizam verticalmente | O container precisa ter uma altura definida (`height`) |
| Espaço estranho entre items | Use `gap` ao invés de `margin` para mais controle |
| Items esticando demais | Use `flex-shrink: 0` ou `flex-grow: 0` |
| Layout quebra em tela pequena | Adicione `flex-wrap: wrap` no container |

---

## 💡 Dica Extra: DevTools do Navegador

O Chrome e Firefox têm ferramentas incríveis para debugar Flexbox!

1. Abra o DevTools (F12)
2. Selecione um elemento com `display: flex`
3. Vai aparecer um badge "flex" - clique nele!
4. Você pode visualizar os eixos e testar propriedades em tempo real

---

## 🎨 Exemplo Completo: Navbar com Flexbox

**HTML:**
```html
<header>
    <nav>
        <a href="#" class="logo">Meu Site</a>
        <div class="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
        </div>
    </nav>
</header>
```

**CSS:**
```css
nav {
    display: flex;
    justify-content: space-between;  /* Logo à esquerda, links à direita */
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1a1a2e;
}

.nav-links {
    display: flex;
    gap: 2rem;  /* Espaço entre os links */
}

nav a {
    color: gold;
    text-decoration: none;
}

nav a:hover {
    color: white;
}
```

---

## ➡️ Próxima Aula

Na **Aula 05** vamos aprender sobre **CSS Grid - Layouts Avançados**! 📐

Grid é o irmão mais novo do Flexbox, perfeito para layouts de duas dimensões (linhas E colunas ao mesmo tempo).

---

**Quando terminar o exercício, me avise! Vou revisar suas melhorias e continuamos evoluindo o portfólio!** 🚀
