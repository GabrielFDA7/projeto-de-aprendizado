# 📚 Aula 03: CSS - Fundamentos e Primeiros Estilos

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Entender o que é CSS e como ele funciona junto com HTML
- Conhecer as 3 formas de aplicar CSS
- Usar seletores básicos para estilizar elementos
- Aplicar cores, fontes e espaçamentos básicos

---

## 📖 Teoria: O que é CSS?

### HTML + CSS = Site Completo

Pense assim:
- **HTML** = Estrutura (esqueleto, ossos)
- **CSS** = Visual (pele, roupa, aparência)

Sem CSS, seu site funciona, mas fica "nu" - só texto preto em fundo branco.

> 💡 **Analogia com Excel**: O HTML é como os DADOS nas células. O CSS é como a FORMATAÇÃO (cores, bordas, tamanho de fonte, alinhamento).

### CSS significa **Cascading Style Sheets**

- **Cascading** = Em cascata (as regras "caem" de cima para baixo, e as de baixo podem sobrescrever as de cima)
- **Style** = Estilo
- **Sheets** = Folhas

---

## 🏗️ As 3 Formas de Usar CSS

### 1. CSS Inline (NÃO recomendado)

Estilo direto na tag HTML:

```html
<p style="color: red; font-size: 20px;">Texto vermelho</p>
```

❌ **Por que evitar?** Mistura estrutura com visual. Difícil de manter.

---

### 2. CSS Interno (OK para testes)

Dentro de uma tag `<style>` no `<head>`:

```html
<head>
    <style>
        p {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
```

⚠️ **Uso**: Bom para testes rápidos, mas para projetos reais, usamos CSS externo.

---

### 3. CSS Externo (RECOMENDADO ✅)

Arquivo separado `.css` linkado no HTML:

**No HTML (dentro do `<head>`):**
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**No arquivo `styles.css`:**
```css
p {
    color: red;
    font-size: 20px;
}
```

✅ **Por que usar?**
- Separação de responsabilidades (HTML = estrutura, CSS = visual)
- Mesmo CSS pode ser usado em várias páginas
- Mais fácil de dar manutenção

> 💡 **Analogia com programação**: É como ter funções em arquivos separados ao invés de tudo em um único arquivo gigante.

---

## 📚 Sintaxe do CSS

### Anatomia de uma Regra CSS

```css
seletor {
    propriedade: valor;
    propriedade: valor;
}
```

**Exemplo real:**
```css
h1 {
    color: blue;
    font-size: 32px;
}
```

Onde:
- `h1` = **Seletor** (quem vai receber o estilo)
- `color` = **Propriedade** (o que vou mudar)
- `blue` = **Valor** (para qual valor mudo)
- `{ }` = **Bloco de declarações**
- `;` = **Termina cada declaração**

> ⚠️ **Importante**: Não esqueça do `;` no final de cada linha! É um erro comum de iniciantes.

---

## 🎨 Seletores Básicos

### 1. Seletor de Tag (Elemento)

Estiliza TODAS as tags daquele tipo:

```css
p {
    color: gray;
}
```
Isso aplica cor cinza em TODOS os `<p>` da página.

---

### 2. Seletor de Classe (`.`)

Estiliza elementos que têm uma classe específica:

**No HTML:**
```html
<p class="destaque">Este parágrafo é especial</p>
<p>Este é normal</p>
```

**No CSS:**
```css
.destaque {
    color: red;
    font-weight: bold;
}
```

> 💡 **Dica**: Classes podem ser reutilizadas em vários elementos!

---

### 3. Seletor de ID (`#`)

Estiliza UM elemento específico (lembra que ID é único?):

**No HTML:**
```html
<h1 id="titulo-principal">Meu Site</h1>
```

**No CSS:**
```css
#titulo-principal {
    color: navy;
    text-align: center;
}
```

> ⚠️ **Regra**: Use classes para estilização repetível. Use ID para elementos únicos ou para links âncora.

---

## 🔍 Propriedades CSS Essenciais

### Cores

```css
/* Cor do texto */
color: red;
color: #FF0000;         /* Hexadecimal */
color: rgb(255, 0, 0);  /* RGB */

/* Cor de fundo */
background-color: lightblue;
```

**Cores mais usadas:**
| Nome | Hex | Uso comum |
|------|-----|-----------|
| `white` | #FFFFFF | Fundos |
| `black` | #000000 | Texto |
| `gray` | #808080 | Texto secundário |
| `navy` | #000080 | Títulos |
| `dodgerblue` | #1E90FF | Links, destaques |

---

### Texto e Fontes

```css
font-size: 16px;              /* Tamanho */
font-weight: bold;            /* Peso (bold, normal, 100-900) */
font-family: Arial, sans-serif; /* Fonte */
text-align: center;           /* Alinhamento (left, center, right) */
text-decoration: underline;   /* Decoração (underline, none) */
line-height: 1.5;             /* Espaço entre linhas */
```

---

### Espaçamentos

```css
margin: 20px;      /* Espaço FORA do elemento */
padding: 20px;     /* Espaço DENTRO do elemento */
```

```
┌─────────────────────────────────────┐
│            MARGIN                   │
│   ┌─────────────────────────────┐   │
│   │         PADDING             │   │
│   │   ┌─────────────────────┐   │   │
│   │   │     CONTEÚDO        │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

### Bordas

```css
border: 1px solid black;    /* Espessura, estilo, cor */
border-radius: 10px;        /* Cantos arredondados */
```

---

## 🎮 Exercício Prático

### Sua Missão:
Criar um arquivo CSS externo e aplicar os primeiros estilos ao seu portfólio.

### Passo 1: Criar o arquivo CSS

Crie um arquivo chamado `styles.css` na pasta `portfolio/`.

### Passo 2: Linkar no HTML

No `<head>` do seu `index.html`, adicione:
```html
<link rel="stylesheet" href="styles.css">
```

### Passo 3: Aplicar os estilos

No arquivo `styles.css`, implemente:

**Reset básico:**
- [X] Remova a margem padrão do `body` com `margin: 0;`
- [X] Defina uma fonte padrão para o `body` (sugestão: `Arial, sans-serif`)

**Header:**
- [X] Aplique uma cor de fundo ao `header` (escolha uma que combine)
- [X] Centralize o texto do `header`
- [X] Adicione `padding` para dar espaço interno

**Navegação:**
- [X] Estilize os links do `nav` removendo o sublinhado padrão
- [X] Mude a cor dos links
- [X] Adicione espaço entre os links

**Seções:**
- [X] Adicione `padding` às `section` para dar respiro ao conteúdo
- [X] Centralize os títulos `h2`

**Footer:**
- [X] Aplique uma cor de fundo
- [X] Centralize o texto
- [X] Mude a cor do texto para combinar com o fundo

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [X] Criei o arquivo `styles.css` na pasta `portfolio/`
- [X] Linkei o CSS no `<head>` do HTML
- [X] O `body` tem margem 0 e uma fonte definida
- [X] O `header` tem cor de fundo e padding
- [X] Os links do `nav` estão estilizados
- [X] As seções têm padding
- [X] O `footer` tem cor de fundo e texto centralizado
- [X] Ao abrir o HTML no navegador, os estilos aparecem!

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| CSS não está aplicando | Verifique se o caminho do `href` está correto e se o arquivo está na mesma pasta |
| Mudei o CSS mas não aparece | Atualize a página (Ctrl+F5 para forçar recarregar sem cache) |
| Estilo não funciona em um elemento | Verifique se escreveu o seletor correto (lembre: `.` para classe, `#` para id) |
| Cor não aparece | Confira se a propriedade está escrita corretamente (`color` vs `colour`) |

---

## 💡 Dica Extra: Inspecionar Elementos

No navegador, clique com o botão direito em qualquer elemento e selecione **"Inspecionar"** (ou aperte F12).

Na aba **Elements**, você pode:
- Ver o HTML e CSS aplicados a cada elemento
- Modificar valores CSS em tempo real para testar
- Ver quais estilos estão sendo sobrescritos

É a ferramenta mais importante para debugar CSS!

---

## 🎨 Paleta de Cores Sugerida para o Portfólio

Para um visual profissional e moderno:

| Uso | Cor | Hex |
|-----|-----|-----|
| Fundo header/footer | Azul escuro | `#1a1a2e` |
| Fundo página | Branco/Cinza claro | `#f5f5f5` |
| Texto principal | Cinza escuro | `#333333` |
| Destaque/Links | Azul | `#4a90d9` |
| Hover dos links | Azul mais claro | `#6ba3e0` |

---

## ➡️ Próxima Aula

Na **Aula 04** vamos aprofundar em **Layout CSS com Flexbox**! 📐

Você vai aprender a posicionar elementos lado a lado, centralizar coisas perfeitamente, e criar layouts responsivos.

---

**Quando terminar o exercício, me avise! Vou revisar seus estilos e partimos para o Flexbox!** 🚀
