let tab_buts = document.querySelectorAll(".leisure-button");
let tabs_info = document.querySelectorAll(".leisure-item");



for (let i = 0; i < tab_buts.length; i++) {
    const but_el = tab_buts[i];
    but_el.addEventListener("click", function () {
        for (let an_buts = 0; an_buts < tab_buts.length; an_buts++) {
            const an_but = tab_buts[an_buts];
            an_but.classList.remove("active");
        }
        but_el.classList.add("active");
        for (let tab = 0; tab < tabs_info.length; tab++) {
            const tab_el = tabs_info[tab];
            tab_el.classList.remove("active");
        }
        for (let tab = 0; tab < tabs_info.length; tab++) {
            const tab_el = tabs_info[tab];
            if (but_el.id == tab_el.dataset.tab) {
                tab_el.classList.add("active");

            }
        }
    })
}