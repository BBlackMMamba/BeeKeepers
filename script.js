const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    allowSlideNext: true,
    allowSlidePrev: true,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',

    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});