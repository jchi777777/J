const intros = document.querySelectorAll('.intro');
intros.forEach(intro => intro.addEventListener('mouseenter',(e) => {
    let filter = e.target.parentNode.children[0];
    filter.classList.add('blur');
}));
intros.forEach(intro => intro.addEventListener('mouseleave',(e) => {
    let filter = e.target.parentNode.children[0];
    filter.classList.remove('blur');
}));
//頁籤切換
const stills = document.querySelectorAll('.tab_still');
const buttons = document.querySelectorAll('.tab_btn');
const contents = document.querySelectorAll('.tab_content');
const stripe = document.querySelector('.stripe');
const video = document.querySelectorAll('video');


function tabContent(event,top,bot,color){
    stills.forEach(still => still.style.display = 'none');
    contents.forEach(content => content.style.display = 'none');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(top).style.display = 'block';
    document.getElementById(bot).style.display = 'flex';
    event.currentTarget.className += ' active';
    document.getElementById(bot).style.borderColor = `${color}`;
    video.forEach(v => v.pause())
    console.log(color);
}

buttons[0].click();

