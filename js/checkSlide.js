function checkSlide(){
    const targets = document.querySelectorAll('.normal');
    targets.forEach(tar => {
        const standard = (window.innerHeight + window.scrollY) - tar.offsetHeight / 2.5;
        const tarBottom = tar.offsetTop + tar.offsetHeight;
        const isHalf = standard > tar.offsetTop;
        if(isHalf){
            tar.classList.add('slide_ani');
        }else{
            tar.classList.remove('slide_ani');
        }
    })
}

window.addEventListener('scroll',checkSlide);

