import { Swiper, Pagination, Controller, Navigation, EffectFade } from "swiper";

Swiper.use([Pagination, Controller, Navigation, EffectFade]);

const sightseeing_swiper = new Swiper(".sight-swiper", {
    direction: "horizontal",
    pagination: {
        el: '.swiper-pagination',
    },

});

const rooms_images = new Swiper(".room-images", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerGroup: 1,
    initialSlide: 1,
    slidesOffsetBefore: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        "960": {
            slidesPerView: 2,
            spaceBetween: 50,

        }
    }
})
const rooms_info = new Swiper(".room-info", {
    direction: "horizontal",
    slidesPerView: 1,
    effect: "fade",
    initialSlide: 1,
    fadeEffect: {
        crossFade: true
    },
})
rooms_images.controller.control = rooms_info;
rooms_info.controller.control = rooms_images;


const reviews_slider = new Swiper(".reviews-slider", {
    direction: "horizontal",
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    grabCursor: true,
    breakpoints: {
        "768": {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        "1200": {
            slidesPerView: 3,
            spaceBetween: 50,
        }

    }

})

const hotel = new Swiper(".swiper-hotel", {
    direction: "horizontal",
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
    },
})

const room = new Swiper(".room-image", {
    direction: "horizontal",
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
    },
})
const mus_swip = new Swiper(".museum-swiper", {
    direction: "horizontal",
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
    },
})