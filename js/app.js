let burger = document.getElementById("header_burger");

burger.addEventListener("click", () => {
  document.getElementById("menu-bar").classList.toggle("menu-bar-active");
});

document.getElementById("header_burger__in").addEventListener("click", () => {
  document.getElementById("menu-bar").classList.toggle("menu-bar-active");
});