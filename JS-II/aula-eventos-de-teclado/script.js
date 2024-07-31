const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");


linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

window.addEventListener('keyup', (e) => {
  console.log(e.key)
  console.log(e.code)

  if(e.code === 'Digit1') { // Existe uma diferença entre o número 1 do topo do teclado e o número 1 do teclado numérico
    console.log('Abriu o menu secundário!')
    navPerfil.style.display = 'block'
  }
    else if(e.code === 'Escape') {
      console.log('Fechou o menu secundário!')
      navPerfil.style.display = 'none'
    }
  
  if(e.code === 'Digit0') {
    console.log('Clicou no botão de Meus Dados!')
    linkPerfilDados.click()
  }  
})