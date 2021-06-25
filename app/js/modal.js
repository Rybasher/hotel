let vid_but = document.querySelector(".full-video");
let modal = document.querySelector(".modal-video-wrapper");


if (vid_but) {
    vid_but.addEventListener("click", function () {
        modal.classList.add("open");
    })
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.remove("open");
        }
    }
}
