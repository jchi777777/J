function checkSlide(){
    const targets = document.querySelectorAll('.normal');
    targets.forEach(tar => {
        const standard = (window.innerHeight + window.scrollY) - tar.height / 2;
        const tarBottom = tar.offsetTop + tar.height;
        const isHalf = standard > tar.offsetTop;
        const isNotPast = window.scrollY < tarBottom;
        if(isHalf && isNotPast){
            tar.classList.add('slide_ani');
        }else{
            tar.classList.remove('slide_ani');
        }
    })
}

window.addEventListener('scroll',checkSlide);

