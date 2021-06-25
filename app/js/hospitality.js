const hosp = document.querySelector(".section-hosptality");

if (hosp) {
    const hosp_rows = document.querySelectorAll(".hosp-row");
    const speed = hosp.dataset.speed;

    let posotionX = 0;
    let coordXprocent = 0;

    function setMouseStyle() {
        let hospItemsWidth = 0;
        hosp_rows.forEach(element => {
            hospItemsWidth += element.offsetWidth;
        });

        const hospDiff = hospItemsWidth - hosp.offsetWidth;
        const distX = Math.floor(coordXprocent - posotionX);
        posotionX = posotionX + (distX * speed);
        let position = hospDiff / 400 * posotionX;
        for (let i = 0; i < hosp_rows.length; i++) {
            const element = hosp_rows[1];
            element.style.cssText = `transform: translate3d(${-position}px, 0,0)`;
        }
        if (Math.abs(distX) > 0) {
            requestAnimationFrame(setMouseStyle);
        } else {
            hosp.classList.remove('_init');
        }

    }
    hosp.addEventListener("mousemove", function (e) {
        const hospWidth = hosp.offsetWidth;

        const coordX = e.pageX - hospWidth / 2;

        coordXprocent = coordX / hospWidth * 200;

        if (!hosp.classList.contains("_init")) {
            requestAnimationFrame(setMouseStyle);
            hosp.classList.add("_init");
        }
    })
}