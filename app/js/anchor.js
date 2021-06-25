let anchor = document.querySelector(".scroll-to-top");


if (anchor) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("header").scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


let next = document.querySelector(".next-section");
let next_sec = document.querySelector(".section-currenTime");

if (next) {
    next.addEventListener("click", function (e) {
        e.preventDefault();
        next_sec.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

