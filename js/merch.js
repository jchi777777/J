const sliders = document.querySelectorAll('.slider_img');
const spots = document.querySelectorAll('.slider_spot span');
const slide_buttons = document.querySelectorAll('.slider_btn button');
let sliderIdx = 0;

function btnSlide(n){
    moveSlide(sliderIdx += n);
}

function moveSlide(idx){
    sliderIdx = idx;
    if(sliderIdx < 0){
        sliderIdx = 3;
    }
    if(sliderIdx > 3){
        sliderIdx = 0;
    }
    sliders.forEach(slide => slide.classList.remove('showSlide'));
    sliders[sliderIdx].className += ' showSlide';

    spots.forEach(spot=> spot.classList.remove('showSpot'));
    spots[sliderIdx].className += ' showSpot';
    console.log(sliderIdx);
}
spots[0].click();
const slideIt = setInterval(() => {
    slide_buttons[1].click();
},2500)