let st_dt = document.querySelector('.stay__details');

if (st_dt) {
    st_dt.addEventListener("click", function () {
        document.querySelector(".stay__body").classList.toggle("active");
    })
}
