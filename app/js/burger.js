let burger = document.querySelector(".menu__burger-icon");
let nav = document.querySelector(".menu__nav");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    burger.nextElementSibling.classList.toggle("active");
})


let mob_burg = document.querySelector(".menu__nav-burger");
mob_burg.addEventListener("click", function () {
    burger.classList.remove("active");
    burger.nextElementSibling.classList.remove("active");

    nav.classList.remove("active");
})