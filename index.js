const app = document.getElementById("app")

// array, vetor
const users = [
  {
    email: 'test@test.com',
    phone: '99999999999',
    ref: 100,
    refBy: null
  },
  {
    email: 'tust@tust.com',
    phone: '99999999999',
    ref: 200,
    refBy: 100
  },
  {
    email: 'tost@tost.com',
    phone: '99999999999',
    ref: 300,
    refBy: 200
  }
]

const getUser = (userData) => {
  return users.find((user) => {
    return user.email == userData.email
  })  
}

const getTotalSubscribers = (userData) => {
  const subs = users.filter((user) => {
    return user.refBy == userData.ref
  })
  return subs.length
}

const showInvite = (userData) => {
  app.innerHTML = `
    <main>
      <h3>Inscrição confirmada!</h3>

      <p>
        Convide mais pessoas e concorra a uma TV80 polegadas! <br/>
        Compartilhe o link e acompanhe as inscrições:
      </p>
      
      <div class="input-group">
        <label for="link">
          <img src="link.svg" alt="Link icon">
        </label>
        <input type="text", id="link" value="https://evento.com?ref=${userData.ref}" disabled>

      </div>
    </main>
    
    <section class="stats">
      <h4>
        ${getTotalSubscribers(userData)}
      </h4>
      <p>
        Inscrições feitas
      </p>
    </section>
`
  app.setAttribute('class', 'page-invite')
  updateImageLinks()
}

const saveUser = (userData) => {
  const newUser = {
    ...userData,
    ref: Math.round(Math.random() * 4000),
    refBy: 100
  }

  users.push(newUser)
  console.log(users)
  return newUser
}

const formAction = () => {
  const form = document.getElementById('form')
  form.onsubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const userData = {
      email: formData.get('email'),
      phone: formData.get('phone'),  
    }

    const user = getUser(userData)
    if(user){
      showInvite(user)
    }else{
      const newUser = saveUser(userData)
      showInvite(newUser)
    }

  }
}

const updateImageLinks = () => {
  document.querySelectorAll('img').forEach(img => {
    if(img.src.includes('githubusercontent')){
      return
    }
    const src = img.getAttribute('src')
    img.src = `https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/${src}`
  })
}

const startApp = () => {
  const content = `
  <main>
        <section class="about">
          <div class="section-header">
            <h2>
              Sobre a NLW
            </h2>
            <!-- <span class="badge">AO VIVO</span> -->
          </div>

          <p>
            A NLW trata-se de uma tecnologia que oferece um sistema de banco de dados para registro e gestão de participantes de eventos. Tendo um sistema de administração onde o criador do evento tem acesso a todos os usuários cadastrados, facilitando a gestão e interação.
            <br/><br/>Uma tecnologia 24/7 | Online & Gratuita | Para todos os públicos.
          </p>
        </section>

        <section class="registration">
          <h2>Inscrição</h2>

          <form id="form">
            <div class="imput-wrapper">
              <div class="input-group">
                <label for="email">
                  <img src="mail.svg" alt="Email icon">
                </label>
                <input type="email" id="email" name="email" placeholder="E-mail">
              </div>

              <div class="input-group">
                <label for="phone">
                  <img src="phone.svg" alt="Phone icon">
                </label>
                <input type="text" id="phone" name="phone" placeholder="Telefone">
              </div>
            </div>

            <button>
              Confirmar
              <img src="arrow.svg" alt="Arrow right">
            </button>
          </form>
        </section>
      </main>
  `

  app.innerHTML = content
  app.setAttribute('class', 'page-start')
  updateImageLinks()
  formAction()
}
startApp()

//showInvite({
//  email: 'test@test.com',
//  phone: '999',
//  ref: 100
//})

document.querySelector("header").onclick = () => startApp()