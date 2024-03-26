function clickMenu() {
    if (menu__mb.style.display == 'block') {
        menu__mb.style.display = 'none'
        btn__humb.setAttribute("src", "./assets/icons-nav/icon-menu.svg")
    } else {
        menu__mb.style.display = 'block'
        btn__humb.setAttribute("src", "./assets/icons-nav/icon-close.svg")
    }
}

function right__click() {
    if (btn__left.style.display == 'block') {
        btn__left.style.display = 'none'
    } else {
        btn__left.style.display = 'block'
        btn__right.style.display = 'none'
    }
}

function left__click() {
    if (btn__right.style.display == 'block') {
        btn__right.style.display = 'none'
    } else {
        btn__right.style.display = 'block'
        btn__left.style.display = 'none'
    }
}