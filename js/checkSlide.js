function checkSlide(){
    const targets = document.querySelectorAll('.normal');
    targets.forEach(tar => {
        const ifshow = tar.offsetTop + (tar.offsetHeight / 1.5);
        let standard = window.innerHeight + window.scrollY;
        if(standard > ifshow){
            tar.classList.add('slide_ani');
        }else{
            tar.classList.remove('slide_ani');
        }
    })
}

window.addEventListener('scroll',checkSlide);

