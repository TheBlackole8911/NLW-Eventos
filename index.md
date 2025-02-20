# HMTL

- Hypertext
- Markup
  - tags
  - atributes
- Language

# CSS

- Cascating
- Style
- Sheet

# JavaScript

- Linguagem Interpretada pelo Browser
- Multiparadigmas

```js
// comentários, variáveis, tipos de dados e funções
const corBola = "azul" + "escuro" // azulescuro
const idade = 10 +2 // 12

// arrow function
const soma = (a, b) => {
  return a + b
}


const resultado = soma("alo", 32)
alert(resultado)
```

// Aula 1
```js
const app = document.getElementById("app")

const formAction = () => {
  const form = document.getElementById('form')
  form.onsubmit = (event) => {
    event.preventDefault()
    
  }
}

const startApp = () => {
  const content = `
  <form id="form">
    <input type="email" name="email" placeholder="E-mail" />
    <input type="text" name="phone" placeholder="Telefone" />
    <button>
      Confirmar
    </button>
  </form>
  `

  app.innerHTML = content

  formAction()
}
startApp()
```

