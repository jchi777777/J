// banner slider
let sliderIndex = 0;
const banners = document.querySelectorAll('.index_banner');
function btnSlide(n){
    showSlide(sliderIndex += n);
    index_videos.forEach(vid => vid.pause());
    index_videos[sliderIndex].play();
}
function showSlide(idx){
    sliderIndex = idx;
    if(sliderIndex < 0)sliderIndex = 2;
    if(sliderIndex > 2)sliderIndex = 0;
    banners.forEach(banner => banner.style.display = 'none');
    banners[sliderIndex].style.display = 'flex';
}
showSlide(0);


// video control
const index_videos = document.querySelectorAll('.index_video');
const toggleBtns = document.querySelectorAll('.playBtn');
const volumes = document.querySelectorAll('.control i');


volumes.forEach(vol => vol.addEventListener('click',() => {
    if(index_videos[sliderIndex].muted){
        index_videos[sliderIndex].muted = false;
        volumes[sliderIndex].classList.remove('fa-volume-off');
        volumes[sliderIndex].classList.add('fa-volume-up');
    }else{
        index_videos[sliderIndex].muted = true;
        volumes[sliderIndex].classList.remove('fa-volume-up');
        volumes[sliderIndex].classList.add('fa-volume-off');
    }
}));

function togglePlay(){
    const method = index_videos[sliderIndex].paused ? 'play' : 'pause';
    index_videos[sliderIndex][method]();
}

function updateButton(){
    const icon = this.paused ? '►   ' : '❚❚';
    toggleBtns[sliderIndex].textContent = icon;
}

toggleBtns.forEach(tog => tog.addEventListener('click',togglePlay));
index_videos.forEach(vid => vid.addEventListener('play',updateButton));
index_videos.forEach(vid => vid.addEventListener('pause',updateButton));

const playVideo = setTimeout(() => {
    index_videos[0].play();
},1000);
