function clickMenu() {
    if (menu__mb.style.display == 'block') {
        menu__mb.style.display = 'none'
        btn__humb.setAttribute("src", "./assets/icons-nav/icon-menu.svg")
    } else {
        menu__mb.style.display = 'block'
        btn__humb.setAttribute("src", "./assets/icons-nav/icon-close.svg")
    }
}