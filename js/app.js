let burger = document.getElementById("header-burger")
let menu = document.getElementById("header_menu")
let logo = document.getElementById("header_logo")

burger.addEventListener('click', () => {
    menu.classList.toggle("header_menu-active")
    burger.classList.toggle("header_burger-active")
    logo.classList.toggle("header_logo-active")
})