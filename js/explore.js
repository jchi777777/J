let slideIndex = 0;
const slider = document.querySelector('.slider');
const move_btns = document.querySelectorAll('.move');
const inners = document.querySelectorAll('.inner');


function plusSlide(idx){
    if(window.innerWidth > 1399){
        showSlide(slideIndex += idx,4);
    }else if(window.innerWidth > 991){
        showSlide(slideIndex += idx,3);
    }else if(window.innerWidth > 767){
        showSlide(slideIndex += idx,2);
    }else{
        showSlide(slideIndex += idx,1);
    }
}

function showSlide(idx,n){
    let moveWidth = (document.querySelector('.inner').clientWidth) + 40;
    if(idx > (inners.length - n)){
        slideIndex = (inners.length - n);
        return;
    }
    if(idx < 0){
        slideIndex = 0;
        return;
    }
    slider.style.marginLeft = `${- moveWidth * idx}px`;
}

window.addEventListener('resize',() => {
    if(window.innerWidth > 1399){
        if(slideIndex == 3)slideIndex = 2;
        showSlide(slideIndex,2);
    }else if(window.innerWidth > 991){
        if(slideIndex == 4)slideIndex = 3;
        showSlide(slideIndex,3);
    }else if(window.innerWidth > 767){
        if(slideIndex == 5)slideIndex = 4;
        if(slideIndex == 3)slideIndex = 4;
        showSlide(slideIndex,2);
    }else{
        showSlide(slideIndex ,1);
    }
})