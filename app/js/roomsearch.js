let loc_sel = document.querySelectorAll(".location-select-wrapper");
// let select = loc_sel.querySelector(".selected-location");
// let loc_head = loc_sel.querySelector(".location-header");
// let options = loc_sel.querySelectorAll(".type-wrapper");

if (loc_sel) {
    for (let i = 0; i < loc_sel.length; i++) {
        const element = loc_sel[i];
        let loc_head = element.querySelector(".location-header")
        let loc_select = element.querySelector(".selected-location");
        loc_head.addEventListener("click", function () {
            element.classList.toggle("open")
        });
        let options = element.querySelectorAll(".type-wrapper");
        for (let j = 0; j < options.length; j++) {
            const option = options[j];
            option.addEventListener("click", function () {
                element.classList.remove("open");
                loc_select.innerHTML = option.querySelector("span").innerHTML;
            })
        }

    }
}



let date_inputs = document.querySelectorAll(".date-field");

if (date_inputs) {
    for (let date = 0; date < date_inputs.length; date++) {

        const date_elem = date_inputs[date];
        console.log(date_elem);
        let input = date_elem.querySelector("input");

        input.addEventListener("focus", function () {
            input.type = "date";
        })
        input.addEventListener("blur", function () {
            input.type = "text";
        })

    }
}



// window.addEventListener('click', function (e) {
//     if (!loc_sel.contains(e.target)) {
//         loc_sel.classList.remove('open');
//     }
// });
