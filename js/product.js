//商品縮圖更換
const thumbnails = document.querySelectorAll('.thumb');
const mainPic = document.querySelector('.main_pic img')

thumbnails.forEach(thumb => thumb.addEventListener('click',(e) => {
    thumbnails.forEach(thum => thum.style.opacity = 0.2)
    e.target.style.opacity = 1;
    mainPic.src = e.target.src;
}));

//燈箱展開
const expands = document.querySelectorAll('.expand');

expands.forEach(expand => expand.addEventListener('click',() => {
    const foldBox = expand.nextElementSibling;
    const foldBox2 = foldBox.nextElementSibling;
    if(foldBox.style.maxHeight){
        foldBox.style.maxHeight = null;
        foldBox2.style.maxHeight = null;
    }else{
        foldBox.style.maxHeight = foldBox.scrollHeight + "px";
        foldBox2.style.maxHeight = foldBox2.scrollHeight + "px";
    }
    window.addEventListener('resize',() => {
        foldBox.style.maxHeight = 'unset'; 
        foldBox2.style.maxHeight = 'unset'; 
    })
}));

