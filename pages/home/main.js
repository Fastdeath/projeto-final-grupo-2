function toggleMode() {
    const body = document.body

    const btn__menu = document.documentElement

    body.classList.toggle("menu__mb")
}

//   function toggleMode() {
//     const html = document.documentElement
//     html.classList.toggle("light")
  
//     // if (html.classList.contains("light")) {
//     //   html.classList.remove("light")
//     // } else {
//     //   html.classList.add("light")
//     // }
  
//     const img = document.querySelector("profile img")
//     if (html.classList.contains("light")) {
//       img.setAttribute("src", "/Assets/avatar-light.png")
//     } else {
//       img.setAttribute("src", "/Assets/avatar.png")
//     }
//   }