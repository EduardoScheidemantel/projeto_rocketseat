//Toggle switch
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

//Change profile img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

//Change alt description
  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Eduardo Cruz sério com arvores ao fundo")
  } else {
    img.setAttribute(
      "alt",
      "Foto de Eduardo Cruz sorrindo de oculos camiseta preta sentado, com fundo com arvores e luzes"
    )
  }
}
