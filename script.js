function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/logo.jpg")
    img.setAttribute("alt", "Mayk Brito assustado com o sol")
  } else {
    img.setAttribute("src", "./assets/logo.jpg")
    img.setAttribute("alt", "Mayk Brito, modo escuro")
  }
}

