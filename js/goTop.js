
const goTop = document.querySelector('.goTop');
const footer = document.querySelector('footer');



goTop.addEventListener('click',() => {
    console.log('hi');
    
    document.documentElement.scrollTop = 0;
});

