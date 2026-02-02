# 📚 Aula 02: HTML Semântico e Estrutura do Portfólio

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Entender a diferença entre HTML genérico e semântico
- Organizar sua página com tags que têm significado
- Criar a estrutura completa de um portfólio profissional

---

## 📖 Teoria: O que é HTML Semântico?

### O Problema do `<div>` para Tudo

Antigamente, desenvolvedores faziam assim:

```html
<div class="cabecalho">...</div>
<div class="menu">...</div>
<div class="conteudo">...</div>
<div class="rodape">...</div>
```

Funciona? **Sim.** É a melhor forma? **Não!**

O `<div>` é uma caixa genérica - não diz NADA sobre o conteúdo. 

### A Solução: Tags Semânticas

HTML5 trouxe tags que DESCREVEM o que o conteúdo é:

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

### Por que usar HTML Semântico?

1. **Acessibilidade**: Leitores de tela (para pessoas cegas) entendem a estrutura
2. **SEO**: Google entende melhor seu site e melhora seu ranking
3. **Manutenção**: Código mais fácil de ler e entender
4. **Profissionalismo**: É o padrão da indústria

> 💡 **Analogia com VBA/Excel**: É como nomear suas variáveis corretamente. `totalVendas` é muito melhor que `x`. As tags semânticas são nomes que descrevem o que o conteúdo É.

---

## 🏗️ As Principais Tags Semânticas

Visualize uma página web assim:

```
┌─────────────────────────────────────────────┐
│                  <header>                    │
│  (Cabeçalho: logo, título, navegação)       │
├─────────────────────────────────────────────┤
│                   <nav>                      │
│  (Navegação: menu de links)                 │
├─────────────────────────────────────────────┤
│                  <main>                      │
│  ┌─────────────────────────────────────┐    │
│  │            <section>                 │    │
│  │  (Uma seção temática do conteúdo)   │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │            <section>                 │    │
│  │  (Outra seção temática)             │    │
│  └─────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│                  <footer>                    │
│  (Rodapé: copyright, links, contato)        │
└─────────────────────────────────────────────┘
```

---

## 📚 Sintaxe de Cada Tag

### 1. `<header>` - Cabeçalho

O cabeçalho da página. Geralmente contém logo, título principal e navegação.

```html
<header>
    <h1>Nome do Site</h1>
    <p>Subtítulo ou slogan</p>
</header>
```

> ⚠️ **Importante**: `<header>` NÃO é a mesma coisa que `<head>`!
> - `<head>` = metadados invisíveis (title, charset, etc.)
> - `<header>` = cabeçalho VISÍVEL da página

---

### 2. `<nav>` - Navegação

Contém os links de navegação do site.

```html
<nav>
    <a href="#secao1">Link 1</a>
    <a href="#secao2">Link 2</a>
    <a href="#secao3">Link 3</a>
</nav>
```

O `<nav>` geralmente fica DENTRO do `<header>`, mas pode ficar fora também.

---

### 3. `<main>` - Conteúdo Principal

Todo o conteúdo único e principal da página.

```html
<main>
    <!-- Todo conteúdo principal aqui -->
</main>
```

> ⚠️ **Regra**: Só pode existir UM `<main>` por página!

---

### 4. `<section>` - Seção Temática

Agrupa conteúdo relacionado. Cada seção geralmente tem seu próprio título.

```html
<section>
    <h2>Título da Seção</h2>
    <p>Conteúdo da seção...</p>
</section>
```

Você pode ter VÁRIAS `<section>` na mesma página.

---

### 5. `<article>` - Conteúdo Independente

Usado para conteúdo que faz sentido por si só: posts de blog, cards de projeto, notícias.

```html
<article>
    <h3>Título do Artigo/Projeto</h3>
    <p>Descrição...</p>
</article>
```

> 💡 **Dica**: Se o conteúdo poderia ser publicado separadamente e ainda fazer sentido, use `<article>`.

---

### 6. `<footer>` - Rodapé

O rodapé da página. Copyright, links secundários, informações de contato.

```html
<footer>
    <p>© 2026 Seu Nome. Todos os direitos reservados.</p>
</footer>
```

---

## 🔍 Conceitos Novos Importantes

### Links Âncora (navegação interna)

Você pode criar links que pulam para outras partes da MESMA página:

**Passo 1**: Dê um `id` ao elemento de destino
```html
<section id="sobre">
    <h2>Sobre Mim</h2>
</section>
```

**Passo 2**: Crie o link com `#` + nome do id
```html
<a href="#sobre">Ir para Sobre</a>
```

Ao clicar, a página rola até a seção "sobre"!

> 💡 **Analogia com VBA**: É como usar `GoTo` para pular para uma label no código!

---

### O Atributo `id`

O `id` é um identificador ÚNICO para um elemento.

```html
<section id="contato">...</section>
```

> ⚠️ **Regra**: Cada `id` só pode existir UMA VEZ na página inteira!

> 💡 **Analogia com Excel**: É como o nome de uma célula nomeada. Você não pode ter duas células com o mesmo nome.

---

### `target="_blank"` - Abrir em Nova Aba

Para links externos, é boa prática abrir em nova aba:

```html
<a href="https://google.com" target="_blank">Ir ao Google</a>
```

Isso mantém o usuário no seu site enquanto o link externo abre em outra aba.

---

### `mailto:` - Link de E-mail

Para criar um link que abre o programa de e-mail:

```html
<a href="mailto:seuemail@exemplo.com">Enviar e-mail</a>
```

---

## 🎮 Exercício Prático

### Sua Missão:
Reescrever seu `portfolio/index.html` usando HTML semântico, criando uma estrutura profissional de portfólio.

### Requisitos:

**Estrutura Geral:**
- [X] A página deve ter `<header>`, `<main>` e `<footer>`
- [X] O `<main>` deve conter várias `<section>`
- [X] Cada `<section>` deve ter um `id` único

**No `<header>`:**
- [X] Seu nome em um `<h1>`
- [X] Um subtítulo/slogan em `<p>` (ex: "Desenvolvedor Web em Formação")
- [X] Um `<nav>` com links para cada seção (use links âncora #)

**No `<main>`, crie estas seções:**

1. **Seção "hero"** (id="hero"):
   - [X] Apresentação inicial impactante
   - [X] Uma frase de destaque sobre você

2. **Seção "sobre"** (id="sobre"):
   - [X] Título `<h2>` "Sobre Mim"
   - [X] 1-2 parágrafos falando sobre você

3. **Seção "habilidades"** (id="habilidades"):
   - [X] Título `<h2>` 
   - [X] Lista com habilidades que está aprendendo (HTML, CSS, etc.)
   - [X] Lista com conhecimentos prévios (VBA, Python, C, etc.)

4. **Seção "projetos"** (id="projetos"):
   - [X] Título `<h2>`
   - [X] Pelo menos 2 projetos, cada um em um `<article>`
   - [X] Cada projeto com: título `<h3>`, descrição, e link (se tiver)
   - [X] Inclua o VILUANMA como um dos projetos!

5. **Seção "contato"** (id="contato"):
   - [X] Título `<h2>`
   - [X] Lista com formas de contato (e-mail, LinkedIn, GitHub)
   - [X] Use `mailto:` para o link de e-mail
   - [X] Use `target="_blank"` para links externos

**No `<footer>`:**
- [X] Texto de copyright com seu nome e o ano
- [X] Uma mensagem pessoal (opcional)

**Navegação:**
- [X] Os links no `<nav>` devem funcionar (rolar até a seção correspondente)

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [X] Minha página tem `<header>`, `<main>` e `<footer>`
- [X] A navegação usa `<nav>` com links âncora
- [X] Tenho pelo menos 5 seções diferentes dentro do `<main>`
- [X] Cada seção tem um `id` único
- [X] Os projetos usam `<article>`
- [X] Os links externos usam `target="_blank"`
- [X] O link de e-mail usa `mailto:`
- [X] Ao clicar nos links do menu, a página rola para a seção correta

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Link âncora não funciona | Verifique se o `id` está escrito igual no link e na seção |
| Página não rola para a seção | Certifique-se de usar `#` antes do nome do id no href |
| Conteúdo aparece junto | Lembre-se que cada seção deve ter seu próprio par de tags de abertura e fechamento |

---

## 💡 Dica Extra: Ferramentas do Desenvolvedor

Aperte **F12** no navegador para abrir as Ferramentas do Desenvolvedor. Na aba "Elements", você consegue ver a "árvore" HTML da sua página e verificar se a estrutura está correta!

---

## ➡️ Próxima Aula

Na **Aula 03** vamos finalmente entrar no **CSS**! 🎨

Você vai aprender a dar VISUAL para toda essa estrutura que criou.

---

**Quando terminar o exercício, me avise! Vou revisar sua estrutura e seguimos para o CSS!** 🚀
