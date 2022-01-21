function checkSlide(){
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const ifshow = img.offsetTop + (img.offsetHeight / 1.5);
        let standard = window.innerHeight + window.scrollY;
        if(standard > ifshow){
            img.classList.add('slide_ani');
        }else{
            img.classList.remove('slide_ani');
        }
    })
}

window.addEventListener('scroll',checkSlide);

