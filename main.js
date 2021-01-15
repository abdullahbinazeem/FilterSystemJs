let galleryItems = document.querySelectorAll('.Gallery-Items');



let HTML = document.querySelectorAll('.HTML');
let CSS = document.querySelectorAll('.CSS');
let JAVASCRIPT = document.querySelectorAll('.JAVASCRIPT');
let HTML_BTN = document.querySelector('.HTML-BTN');
let CSS_BTN = document.querySelector('.CSS-BTN');
let JS_BTN = document.querySelector('.JS-BTN');


HTML_BTN.addEventListener('click', () => {
    for (i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove('Active');
    }

    for (i = 0; i < HTML.length; i++) {
        HTML[i].classList.add('Active');
    }
});

CSS_BTN.addEventListener('click', () => {
    for (i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove('Active');
    }

    for (i = 0; i < CSS.length; i++) {
        CSS[i].classList.add('Active');
    }
});

JS_BTN.addEventListener('click', () => {
    for (i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove('Active');
    }

    for (i = 0; i < JAVASCRIPT.length; i++) {
        JAVASCRIPT[i].classList.add('Active');
    }
});

document.querySelector('.ALL').addEventListener('click', () => {
    for (i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.add('Active');
    }
})