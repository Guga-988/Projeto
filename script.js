function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains('light')) {
  //   html.classList.remove('light');
  //} else {
  //   html.classList.add('light');
  // }
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver lught mode , adicionar a imagem light
    img.setAttribute("src", "./Assets/avatar-light.png")
  } else {
    // se tiver sem light mode, adicionar a imagem original
    img.setAttribute("src", "./Assets/avatar.png")
  }
}
