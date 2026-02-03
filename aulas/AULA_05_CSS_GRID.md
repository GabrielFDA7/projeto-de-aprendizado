# 📚 Aula 05: CSS Grid - Layouts Avançados

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Entender o que é CSS Grid e quando usar
- Criar layouts de duas dimensões (linhas E colunas)
- Usar `grid-template-columns` e `grid-template-rows`
- Posicionar elementos em áreas específicas do grid
- Combinar Grid com Flexbox para layouts poderosos

---

## 📖 Teoria: Grid vs Flexbox

### Quando usar cada um?

| Flexbox | Grid |
|---------|------|
| **Uma dimensão** (linha OU coluna) | **Duas dimensões** (linhas E colunas) |
| Elementos em sequência | Layout estruturado |
| Navbars, cards em linha | Páginas inteiras, galerias |
| Distribuir espaço entre items | Posicionar items em áreas específicas |

> 💡 **Regra de ouro**: Use **Flexbox** para componentes (navbar, lista de cards). Use **Grid** para layouts de página inteira ou galerias de fotos.

```
FLEXBOX (1D):                    GRID (2D):
┌───┬───┬───┬───┐               ┌───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │               │ 1 │ 2 │ 3 │
└───┴───┴───┴───┘               ├───┼───┼───┤
                                │ 4 │ 5 │ 6 │
                                ├───┼───┼───┤
                                │ 7 │ 8 │ 9 │
                                └───┴───┴───┘
```

---

## 🏗️ Conceitos Fundamentais

### Container e Items (igual Flexbox!)

```html
<div class="grid-container">    <!-- CONTAINER -->
    <div class="item">1</div>   <!-- ITEM -->
    <div class="item">2</div>   <!-- ITEM -->
    <div class="item">3</div>   <!-- ITEM -->
</div>
```

```css
.grid-container {
    display: grid;  /* Ativa o Grid no container */
}
```

---

## 📚 Propriedades do Container (Pai)

### 1. `display: grid` - Ativa o Grid

```css
.container {
    display: grid;
}
```

---

### 2. `grid-template-columns` - Definir Colunas

Define quantas colunas e qual o tamanho de cada uma.

```css
.container {
    display: grid;
    
    /* 3 colunas de 200px cada */
    grid-template-columns: 200px 200px 200px;
    
    /* 3 colunas iguais (mais flexível!) */
    grid-template-columns: 1fr 1fr 1fr;
    
    /* Atalho: repeat(quantidade, tamanho) */
    grid-template-columns: repeat(3, 1fr);
    
    /* Colunas de tamanhos diferentes */
    grid-template-columns: 1fr 2fr 1fr;
}
```

> 💡 **O que é `fr`?** É uma unidade de "fração". `1fr` significa "1 parte do espaço disponível". Se você tem `1fr 2fr`, a segunda coluna terá o DOBRO do tamanho da primeira.

```
grid-template-columns: 1fr 1fr 1fr;

┌─────────┬─────────┬─────────┐
│   1fr   │   1fr   │   1fr   │
│  (33%)  │  (33%)  │  (33%)  │
└─────────┴─────────┴─────────┘

grid-template-columns: 1fr 2fr 1fr;

┌──────┬────────────┬──────┐
│ 1fr  │    2fr     │ 1fr  │
│(25%) │   (50%)    │(25%) │
└──────┴────────────┴──────┘
```

---

### 3. `grid-template-rows` - Definir Linhas

Define a altura das linhas.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px 200px 100px;
}
```

> ⚠️ **Dica**: Muitas vezes você não precisa definir `grid-template-rows`. O Grid cria linhas automaticamente conforme necessário!

---

### 4. `gap` - Espaço Entre Células

Funciona igual ao Flexbox!

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;           /* Espaço igual em todas as direções */
    gap: 10px 20px;      /* 10px vertical, 20px horizontal */
    row-gap: 10px;       /* Só entre linhas */
    column-gap: 20px;    /* Só entre colunas */
}
```

---

### 5. `justify-items` e `align-items` - Alinhamento dos Items

```css
.container {
    display: grid;
    
    /* Alinhamento horizontal dos items dentro da célula */
    justify-items: start;   /* Esquerda */
    justify-items: center;  /* Centro */
    justify-items: end;     /* Direita */
    justify-items: stretch; /* Estica (padrão) */
    
    /* Alinhamento vertical */
    align-items: start;     /* Topo */
    align-items: center;    /* Centro */
    align-items: end;       /* Base */
    align-items: stretch;   /* Estica (padrão) */
}
```

---

## 📚 Propriedades dos Items (Filhos)

### 1. `grid-column` - Ocupar Múltiplas Colunas

Faz um item ocupar mais de uma coluna.

```css
.item-destaque {
    grid-column: span 2;  /* Ocupa 2 colunas */
}

/* Ou especificar posição exata: */
.item-destaque {
    grid-column: 1 / 3;   /* Da coluna 1 até a 3 (ocupa 2) */
}
```

```
Sem span:                Com grid-column: span 2:
┌───┬───┬───┐           ┌───────────┬───┐
│ 1 │ 2 │ 3 │           │     1     │ 2 │
├───┼───┼───┤           ├───┬───┬───┼───┤
│ 4 │ 5 │ 6 │           │ 3 │ 4 │ 5 │ 6 │
└───┴───┴───┘           └───┴───┴───┴───┘
```

---

### 2. `grid-row` - Ocupar Múltiplas Linhas

```css
.item-alto {
    grid-row: span 2;  /* Ocupa 2 linhas */
}
```

---

### 3. Combinando column e row

```css
.item-grande {
    grid-column: span 2;
    grid-row: span 2;  /* Ocupa um quadrado 2x2! */
}
```

---

## 🔥 Receita: Grid Responsivo Automático

O superpoder do Grid! Criar layouts que se adaptam automaticamente:

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

**O que isso faz:**
- `auto-fit`: Cria quantas colunas couberem
- `minmax(250px, 1fr)`: Cada coluna tem no mínimo 250px, no máximo 1fr

```
Tela grande:           Tela média:          Tela pequena:
┌───┬───┬───┬───┐      ┌───┬───┬───┐        ┌───┬───┐
│ 1 │ 2 │ 3 │ 4 │      │ 1 │ 2 │ 3 │        │ 1 │ 2 │
├───┼───┼───┼───┤      ├───┼───┼───┤        ├───┼───┤
│ 5 │ 6 │ 7 │ 8 │      │ 4 │ 5 │ 6 │        │ 3 │ 4 │
└───┴───┴───┴───┘      └───┴───┴───┘        ├───┼───┤
                                            │ 5 │ 6 │
                                            └───┴───┘
```

> 💡 **Isso é mágico!** Você não precisa de media queries para fazer o grid se adaptar!

---

## 🎮 Exercício Prático

### Sua Missão:
Converter a seção de projetos do seu portfólio para usar CSS Grid.

### Requisitos:

**1. Seção de Projetos com Grid:**
- [X] Mudar `.projetos-container` de Flexbox para Grid
- [X] Usar `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- [X] Manter o `gap: 2rem`

**2. (Opcional) Destacar um projeto:**
- [X] Fazer o primeiro projeto ocupar 2 colunas com `grid-column: span 2`
- [X] Adicionar uma classe especial para isso (ex: `.projeto-destaque`)

**3. Manter a responsividade:**
- [X] O layout deve funcionar bem em todas as telas
- [X] Testar redimensionando a janela

---

## 📋 Passo a Passo

### Passo 1: Alterar o CSS do container de projetos

Abra seu `styles.css` e encontre `.projetos-container`. Mude de:

```css
/* ANTES (Flexbox) */
.projetos-container {
    display: flex;
    gap: 2rem;
}
```

Para:

```css
/* DEPOIS (Grid) */
.projetos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

### Passo 2: Ajustar os articles (items)

Você pode simplificar os estilos dos articles:

```css
/* ANTES */
.projetos-container article {
    flex: 1;
    min-width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
    flex-wrap: wrap;
}
```

```css
/* DEPOIS (mais limpo) */
.projetos-container article {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

> 💡 Não precisamos mais de `flex: 1`, `min-width` ou `flex-wrap` porque o Grid cuida disso!

### Passo 3 (Opcional): Destacar o primeiro projeto

No CSS, adicione:

```css
.projeto-destaque {
    grid-column: span 2;
}
```

No HTML, adicione a classe ao primeiro article:

```html
<article class="projeto-destaque">
    <h3>Projeto 1 - VILUANMA</h3>
    ...
</article>
```

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [X] `.projetos-container` usa `display: grid`
- [X] Você usou `grid-template-columns` com `auto-fit` e `minmax`
- [X] O layout se adapta quando você redimensiona a janela
- [X] Você entende a diferença entre Grid e Flexbox
- [X] (Bônus) Um projeto está destacado ocupando 2 colunas

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Items não estão em grid | Verifique se `display: grid` está no container (pai) |
| Colunas de tamanhos estranhos | Use `fr` ao invés de `px` para colunas flexíveis |
| `span 2` não funciona | O item deve ter espaço para expandir (grid precisa ter 2+ colunas) |
| Grid muito apertado | Adicione `gap` para espaçamento |
| Layout não responsivo | Use `auto-fit` com `minmax()` |

---

## 💡 Dica Extra: DevTools para Grid

Assim como Flexbox, o navegador tem ferramentas visuais para Grid!

1. Abra o DevTools (F12)
2. Selecione um elemento com `display: grid`
3. Vai aparecer um badge "grid" - clique nele!
4. Você verá as linhas do grid sobrepostas ao layout

---

## 🎨 Comparação: Seu Código Antes e Depois

**Antes (Flexbox):**
```css
.projetos-container {
    display: flex;
    gap: 2rem;
}

.projetos-container article {
    flex: 1;
    min-width: 300px;
    flex-wrap: wrap;
    /* ... outros estilos */
}
```

**Depois (Grid):**
```css
.projetos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.projetos-container article {
    /* ... apenas estilos visuais, sem layout */
}
```

> O Grid é mais **declarativo** - você diz exatamente o que quer, ao invés de usar "truques" como `flex: 1` e `min-width`.

---

## 📊 Resumo das Propriedades

### Container (Pai)
| Propriedade | O que faz | Exemplo |
|-------------|-----------|---------|
| `display: grid` | Ativa o Grid | - |
| `grid-template-columns` | Define colunas | `repeat(3, 1fr)` |
| `grid-template-rows` | Define linhas | `100px auto 100px` |
| `gap` | Espaço entre células | `20px` |
| `justify-items` | Alinha items horizontalmente | `center` |
| `align-items` | Alinha items verticalmente | `center` |

### Items (Filhos)
| Propriedade | O que faz | Exemplo |
|-------------|-----------|---------|
| `grid-column` | Ocupa múltiplas colunas | `span 2` |
| `grid-row` | Ocupa múltiplas linhas | `span 2` |
| `justify-self` | Alinha este item horizontalmente | `center` |
| `align-self` | Alinha este item verticalmente | `center` |

---

## ➡️ Próxima Aula

Na **Aula 06** vamos aprender sobre **CSS Responsivo - Media Queries**! 📱

Você vai aprender a fazer seu site se adaptar perfeitamente a qualquer tamanho de tela - celulares, tablets e desktops.

---

**Quando terminar o exercício, me avise! Vou revisar seu código Grid e continuamos com responsividade!** 🚀
