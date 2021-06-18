let anchor = document.querySelector(".scroll-to-top");

anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("header").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})