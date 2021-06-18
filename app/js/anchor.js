let anchor = document.querySelector(".scroll-to-top");

anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("header").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

let next = document.querySelector(".next-section");
let next_sec = document.querySelector(".section-currenTime");

next.addEventListener("click", function (e) {
    e.preventDefault();
    next_sec.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
