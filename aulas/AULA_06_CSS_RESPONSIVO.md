# 📚 Aula 06: CSS Responsivo - Media Queries

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Entender o que é design responsivo e por que é essencial
- Usar Media Queries para adaptar seu site a diferentes tamanhos de tela
- Aplicar a abordagem "Mobile-First"
- Criar breakpoints para celular, tablet e desktop
- Tornar seu portfólio totalmente responsivo

---

## 📖 Teoria: O Que é Design Responsivo?

### Por que precisamos disso?

Em 2026, **mais de 60% do tráfego web** vem de dispositivos móveis. Se seu site não funciona bem no celular, você está perdendo a maioria dos visitantes!

```
Desktop (1920px)          Tablet (768px)         Mobile (375px)
┌─────────────────┐       ┌───────────┐          ┌─────┐
│  Logo    Menu   │       │ Logo Menu │          │ ☰   │
├─────┬───────────┤       ├───────────┤          ├─────┤
│     │           │       │           │          │     │
│ NAV │  CONTEÚDO │  →    │ CONTEÚDO  │    →     │     │
│     │           │       │           │          │CONT.│
├─────┴───────────┤       ├───────────┤          │     │
│     FOOTER      │       │  FOOTER   │          ├─────┤
└─────────────────┘       └───────────┘          │FOOT │
                                                 └─────┘
```

> 💡 **Analogia com Excel**: Pense em formatação condicional! Assim como você muda a cor de uma célula baseado no valor, com Media Queries você muda o estilo baseado no tamanho da tela.

---

## 🏗️ Media Queries: A Sintaxe

### Estrutura Básica

```css
/* Estilos PADRÃO - Aplicam a todos os tamanhos */
.elemento {
    font-size: 16px;
    padding: 10px;
}

/* Estilos que SOMENTE aplicam quando a tela tem 768px ou mais */
@media (min-width: 768px) {
    .elemento {
        font-size: 18px;
        padding: 20px;
    }
}

/* Estilos que SOMENTE aplicam quando a tela tem 1024px ou mais */
@media (min-width: 1024px) {
    .elemento {
        font-size: 20px;
        padding: 30px;
    }
}
```

> ⚠️ **Importante**: O `@media` funciona como um "if" no código! Se a condição for verdadeira, os estilos dentro são aplicados.

---

## 📚 Sintaxe de Cada Tipo de Media Query

### 1. `min-width` - A Partir de X pixels

Aplica estilos quando a tela é **maior ou igual** ao valor.

```css
/* Quando a tela tiver 768px ou MAIS */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}
```

> 💡 **Dica**: Use `min-width` para a abordagem **Mobile-First** (recomendado!). Você começa com estilos mobile e vai adicionando para telas maiores.

---

### 2. `max-width` - Até X pixels

Aplica estilos quando a tela é **menor ou igual** ao valor.

```css
/* Quando a tela tiver 767px ou MENOS */
@media (max-width: 767px) {
    .menu {
        display: none;
    }
}
```

> ⚠️ **Cuidado**: Usar muito `max-width` pode complicar seu CSS. Prefira `min-width` na maioria dos casos.

---

### 3. Combinando Condições

```css
/* Entre 768px e 1023px (tablets) */
@media (min-width: 768px) and (max-width: 1023px) {
    .sidebar {
        width: 200px;
    }
}
```

---

## 🔍 Conceitos Novos Importantes

### Mobile-First: A Abordagem Moderna

**Passo 1**: Escreva o CSS para mobile primeiro (sem media query)
```css
/* Mobile (padrão) */
.nav {
    flex-direction: column;
    gap: 1rem;
}
```

**Passo 2**: Adicione estilos para telas maiores
```css
/* Tablet e Desktop */
@media (min-width: 768px) {
    .nav {
        flex-direction: row;
        gap: 4rem;
    }
}
```

> 💡 **Por que Mobile-First?** 
> - Celulares são mais limitados, é mais fácil começar simples
> - O CSS fica mais organizado
> - Melhor performance em dispositivos móveis

---

### Breakpoints Comuns

Breakpoints são os "pontos de quebra" onde o layout muda.

| Nome | Tamanho | Dispositivos |
|------|---------|--------------|
| Mobile | `< 768px` | Smartphones |
| Tablet | `768px - 1023px` | Tablets, iPads |
| Desktop | `1024px - 1439px` | Laptops |
| Large Desktop | `≥ 1440px` | Monitores grandes |

```css
/* Estilos Mobile (padrão - sem media query) */
.container { ... }

/* Tablet */
@media (min-width: 768px) {
    .container { ... }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { ... }
}

/* Large Desktop */
@media (min-width: 1440px) {
    .container { ... }
}
```

> ⚠️ **Regra**: Você não precisa usar TODOS os breakpoints. Use apenas os necessários para seu design.

---

## 🎨 Propriedades Que Mais Mudam Entre Breakpoints

| Propriedade | Mobile | Desktop |
|-------------|--------|---------|
| `flex-direction` | `column` | `row` |
| `font-size` | menor | maior |
| `padding` | menor | maior |
| `display` | `none` (esconder) | `flex` (mostrar) |
| `grid-template-columns` | `1fr` | `repeat(3, 1fr)` |
| `width` | `100%` | tamanho fixo |

---

## 🎮 Exercício Prático

### Sua Missão:
Tornar seu portfólio totalmente responsivo, adaptando o layout para funcionar perfeitamente em celulares, tablets e desktops.

### Requisitos:

**1. Header Responsivo:**
- [X] No mobile, a navegação deve ficar em coluna (uma linha para cada link)
- [X] No desktop, a navegação deve ficar em linha
- [X] Reduzir o `gap` da navegação no mobile

**2. Seção de Habilidades:**
- [X] No mobile, os cards devem ficar empilhados (um embaixo do outro)
- [X] No tablet/desktop, os cards ficam lado a lado

**3. Seção de Projetos:**
- [X] No mobile, mostrar apenas 1 coluna
- [X] No tablet, mostrar 2 colunas
- [X] O projeto destaque (`span 2`) deve ocupar 1 coluna no mobile

**4. Tipografia Responsiva:**
- [X] Títulos (`h1`, `h2`) devem ser menores no mobile
- [X] Padding das seções deve ser reduzido no mobile

---

## 📋 Passo a Passo

### Passo 1: Adicione a Meta Tag de Viewport (ESSENCIAL!)

No seu `index.html`, verifique se existe esta meta tag no `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> ⚠️ **Sem essa tag, o responsivo NÃO funciona no celular!** Você já tem essa tag, então está ok!

### Passo 2: Reorganize seu CSS com Mobile-First

Adicione no FINAL do seu `styles.css`:

```css
/* ========================================
   RESPONSIVIDADE - MEDIA QUERIES
   ======================================== */

/* ----- TABLET (768px ou mais) ----- */
@media (min-width: 768px) {
    /* Estilos para tablet aqui */
}

/* ----- DESKTOP (1024px ou mais) ----- */
@media (min-width: 1024px) {
    /* Estilos para desktop aqui */
}
```

### Passo 3: Ajuste a Navegação

Primeiro, altere o CSS padrão do `nav` para mobile:

```css
nav {
    padding-top: 20px;
    display: flex;
    flex-direction: column;  /* MUDE: Links em coluna no mobile */
    justify-content: center;
    align-items: center;
    gap: 1rem;               /* MUDE: Menos espaço no mobile */
}
```

Depois, adicione no media query de tablet:

```css
@media (min-width: 768px) {
    nav {
        flex-direction: row;  /* Links em linha */
        gap: 4rem;            /* Mais espaço */
    }
}
```

### Passo 4: Ajuste as Habilidades

Seu `.habilidades-container` já usa Flexbox com `flex-wrap: wrap` e `min-width: 300px`, então já é responsivo! Mas você pode ajustar:

```css
/* Mobile: força uma coluna */
.habilidades-container {
    display: flex;
    flex-direction: column;  /* Empilhado no mobile */
    gap: 2rem;
}

@media (min-width: 768px) {
    .habilidades-container {
        flex-direction: row;  /* Lado a lado no tablet+ */
        flex-wrap: wrap;
    }
}
```

### Passo 5: Ajuste os Projetos

```css
/* Mobile: 1 coluna */
.projetos-container {
    display: grid;
    grid-template-columns: 1fr;  /* Uma coluna */
    gap: 1rem;
}

/* Mobile: destaque não expande */
.projeto-destaque {
    grid-column: span 1;
}

@media (min-width: 768px) {
    .projetos-container {
        grid-template-columns: 1fr 1fr;  /* Duas colunas */
    }
    
    .projeto-destaque {
        grid-column: span 2;  /* Expande no tablet+ */
    }
}
```

### Passo 6: Ajuste a Tipografia

```css
/* Mobile */
h1 {
    font-size: 1.5rem;  /* Menor no mobile */
}

h2 {
    font-size: 1.25rem;
}

@media (min-width: 768px) {
    h1 {
        font-size: 2rem;  /* Maior no tablet+ */
    }
    
    h2 {
        font-size: 1.5rem;
    }
}
```

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [ ] A meta tag viewport está presente no HTML
- [ ] O site está legível e usável no celular
- [ ] A navegação muda de coluna para linha
- [ ] Os cards de habilidades se empilham no mobile
- [ ] Os projetos mostram 1 coluna no mobile, 2 no tablet+
- [ ] Você testou redimensionando a janela do navegador

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Responsivo não funciona no celular real | Adicione a meta tag `viewport` no HTML |
| Estilos não aplicam no tamanho certo | Verifique se usou `min-width` ou `max-width` corretamente |
| Media query não funciona | Certifique-se que está FORA de outras regras CSS |
| Texto muito pequeno no mobile | Use `rem` ou `em` ao invés de `px` para fontes |
| Layout quebrado | Use DevTools para testar diferentes tamanhos |

---

## 💡 Dica Extra: DevTools para Testar Responsividade

O navegador tem ferramentas incríveis para testar responsividade!

1. Abra o DevTools (F12)
2. Clique no ícone de **celular/tablet** (ou `Ctrl + Shift + M`)
3. Escolha um dispositivo pré-definido ou ajuste manualmente
4. Veja como seu site aparece em diferentes tamanhos!

```
┌────────────────────────────────────────┐
│  [📱] Responsive   ▼  │ 375 x 667  │
├────────────────────────────────────────┤
│                                        │
│        Visualização do Site            │
│                                        │
└────────────────────────────────────────┘
```

---

## 📊 Resumo das Media Queries

| Sintaxe | Quando Aplica | Uso Comum |
|---------|---------------|-----------|
| `@media (min-width: 768px)` | Tela ≥ 768px | Estilos para tablet+ |
| `@media (max-width: 767px)` | Tela ≤ 767px | Estilos só para mobile |
| `@media (min-width: 768px) and (max-width: 1023px)` | 768px a 1023px | Só tablets |
| `@media (orientation: landscape)` | Tela deitada | Ajustes para paisagem |

---

## 🎯 Ordem Correta das Media Queries (Mobile-First)

```css
/* 1. Estilos Base (Mobile) - SEM media query */
.elemento { ... }

/* 2. Tablet - 768px+ */
@media (min-width: 768px) { ... }

/* 3. Desktop - 1024px+ */
@media (min-width: 1024px) { ... }

/* 4. Large Desktop - 1440px+ */
@media (min-width: 1440px) { ... }
```

> ⚠️ **IMPORTANTE**: As media queries devem estar em ORDEM CRESCENTE de tamanho! Se colocar fora de ordem, os estilos podem sobrescrever uns aos outros incorretamente.

---

## ➡️ Próxima Aula

Na **Aula 07** vamos aprender sobre **JavaScript - Fundamentos**! 🟨

Vamos sair do CSS e entrar no mundo da programação front-end, adicionando interatividade ao seu portfólio!

---

**Quando terminar o exercício, me avise! Vou revisar seu código responsivo e testar em diferentes tamanhos de tela!** 🚀
