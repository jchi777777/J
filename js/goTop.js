
const goTop = document.querySelector('.goTop');
const footer = document.querySelector('footer');



goTop.addEventListener('click',() => {
    document.documentElement.scrollTop = 0;
});

