# 📚 Aula 01: A Estrutura Básica do HTML

## 🎯 Objetivo desta aula
Ao final desta aula, você será capaz de:
- Criar um arquivo HTML do zero
- Entender a estrutura obrigatória de toda página web
- Usar as primeiras tags de texto

---

## 📖 Teoria: O que é HTML?

HTML significa **HyperText Markup Language** (Linguagem de Marcação de HiperTexto).

Pense assim:
- **Hipertexto** = texto com links que levam a outros textos
- **Marcação** = você "marca" o conteúdo dizendo O QUE ele é (título, parágrafo, imagem, etc.)

> 💡 **Analogia com VBA**: Sabe quando você formata uma célula no Excel como "Moeda" ou "Data"? O HTML faz algo parecido - você "marca" um texto dizendo "isso é um título", "isso é um parágrafo", etc.

---

## 🏗️ A Estrutura Obrigatória

Todo arquivo HTML tem esta estrutura básica:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <!-- Seu conteúdo vai aqui -->
</body>
</html>
```

### Explicando cada parte:

| Elemento | O que faz |
|----------|-----------|
| `<!DOCTYPE html>` | Diz ao navegador: "Este é um documento HTML5" |
| `<html lang="pt-BR">` | Elemento raiz. `lang` define o idioma (ajuda na acessibilidade) |
| `<head>` | Informações SOBRE a página (não aparecem na tela) |
| `<meta charset="UTF-8">` | Define a codificação (permite acentos: ç, ã, é) |
| `<meta name="viewport"...>` | Faz a página funcionar bem em celulares |
| `<title>` | O texto que aparece na aba do navegador |
| `<body>` | Todo conteúdo VISÍVEL da página vai aqui |
| `<!-- comentário -->` | Comentários (não aparecem na página) |

> 💡 **Analogia com VBA**: O `<head>` é como as configurações do módulo VBA (Option Explicit, etc.). O `<body>` é onde vai o código que realmente faz algo.

---

## ✏️ Tags de Texto Básicas

### Títulos (h1 a h6)

```html
<h1>Título Principal (maior)</h1>
<h2>Subtítulo</h2>
<h3>Sub-subtítulo</h3>
<h4>Título nível 4</h4>
<h5>Título nível 5</h5>
<h6>Título nível 6 (menor)</h6>
```

> ⚠️ **Regra Importante**: Use apenas UM `<h1>` por página! É o título principal.

### Parágrafos

```html
<p>Este é um parágrafo. Todo texto corrido vai dentro de tags p.</p>
<p>Cada parágrafo é um bloco separado.</p>
```

### Quebra de linha

```html
<p>Primeira linha<br>Segunda linha (mesmo parágrafo)</p>
```

### Texto em destaque

```html
<p>Texto <strong>em negrito</strong> e texto <em>em itálico</em>.</p>
```

---

## 🎮 Exercício Prático

### Sua Missão:
Criar o arquivo `index.html` dentro da pasta `portfolio` com:

1. A estrutura básica do HTML
2. Um título `<h1>` com seu nome
3. Um subtítulo `<h2>` com "Desenvolvedor Web em Formação"
4. Um parágrafo `<p>` se apresentando (2-3 frases sobre você)
5. Outro parágrafo sobre por que você quer ser desenvolvedor

### Passo a passo:

1. **Crie o arquivo** `portfolio/index.html`

2. **Digite** (não copie! digitar ajuda a memorizar):

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Nome - Portfólio</title>
</head>
<body>
    <h1>Seu Nome Aqui</h1>
    <h2>Desenvolvedor Web em Formação</h2>
    
    <p>
        Olá! Eu sou [seu nome] e estou começando minha jornada 
        como desenvolvedor web. [Adicione mais sobre você]
    </p>
    
    <p>
        Decidi entrar na área de tecnologia porque... 
        [escreva suas motivações aqui]
    </p>
</body>
</html>
```

3. **Personalize** o conteúdo com suas informações reais!

4. **Teste**: Abra o arquivo no navegador (duplo clique ou arraste para o Chrome/Edge)

---

## ✅ Checklist de Conclusão

Antes de ir para a próxima aula, confirme:

- [X] Criei o arquivo `portfolio/index.html`
- [X] Minha página tem a estrutura básica completa (DOCTYPE, html, head, body)
- [X] Tenho um `<h1>` com meu nome
- [X] Tenho um `<h2>` com subtítulo
- [X] Tenho pelo menos 2 parágrafos `<p>`
- [X] A página abre corretamente no navegador
- [X] Os acentos aparecem corretamente (UTF-8 funcionando)

---

## 🔍 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Acentos aparecem estranhos (Ã©) | Verifique se tem `<meta charset="UTF-8">` no `<head>` |
| Página em branco | O conteúdo está dentro do `<body>`? |
| Texto todo junto | Lembre-se: espaços e enters no código não aparecem na página. Use `<p>` e `<br>` |

---

## 📚 Conceitos Extras (Opcional)

Se quiser explorar mais antes da próxima aula:

### Links
```html
<a href="https://google.com">Clique aqui para ir ao Google</a>
```

### Listas
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

---

## ➡️ Próxima Aula

Na **Aula 02** vamos:
- Adicionar mais seções ao portfólio
- Aprender sobre HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`)
- Criar a estrutura completa da página

---

**Quando terminar o exercício, me avise! Vou revisar seu código e seguimos para a próxima aula.** 💪
