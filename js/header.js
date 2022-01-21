const hamburger = document.querySelector('.hamburger_box');
const hamburger_list = document.querySelector('.hamburger_list')
const navBar = document.querySelector('header');
const ham_mem = document.querySelector('.ham_mem');
let thisScroll;
let lastScroll;
function preventDefault(e) {
    e.preventDefault();
}

// modern Chrome requires { passive: false } when adding event
const supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
}

hamburger.addEventListener('click', function(){
    this.classList.toggle('change');
    document.body.classList.toggle('overflow')
    hamburger_list.classList.toggle('active');
});

ham_mem.addEventListener('click',() => {
    memberPopup.style.display = 'flex';
    disableScroll();
    
})


window.addEventListener('resize',() => {
    let bodyWidth = document.body.offsetWidth;
    console.log(bodyWidth);
    
    if(bodyWidth >= 992){
        hamburger.classList.remove('change');
        document.body.classList.remove('overflow')
        hamburger_list.classList.remove('active');
    }
    if(bodyWidth > 575){
        login.style.zIndex = 3;
        register.style.zIndex = 3;
    }else{
        login.style.zIndex = 5;
        register.style.zIndex = 4;
    }
});


window.addEventListener('scroll',() => {
    thisScroll = window.scrollY;
    if(thisScroll > lastScroll && thisScroll > navBar.offsetHeight && window.innerWidth >767 ){
        navBar.classList.add('hide_header');
    }else{
        navBar.classList.remove('hide_header');
    }
    lastScroll = thisScroll;
});

/////// 登入註冊燈箱

const memberPopup = document.querySelector('.member_popup');
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const filter = document.querySelector('.filter');
const switchBtn = document.querySelector('.switch');
const closeBtn = document.querySelector('.close');
const memberBtn = document.querySelector('.memberBtn');
const showIn = document.querySelector('.show_In');
const showUp = document.querySelector('.show_Up');

memberBtn.addEventListener('click',() => {
    memberPopup.style.display = 'flex';
    disableScroll();
});

memberPopup.addEventListener('click',(e) => {
    if(e.target !== memberPopup)return;
    memberPopup.style.display = 'none';
    enableScroll();
})

closeBtn.addEventListener('click',() => {
    memberPopup.style.display = 'none';
    enableScroll();
});

switchBtn.addEventListener('click',() => {
    login.classList.toggle('moveLeft');
    register.classList.toggle('moveRight');
    filter.classList.toggle('moveBtn');
    if(switchBtn.innerText === '⇦ 已有帳號'){
        switchBtn.innerText = '沒有帳號 ⇨';
        switchBtn.style.color = 'rgb(31, 66, 90)';
    }else{
        switchBtn.innerText = '⇦ 已有帳號';
        switchBtn.style.color = 'rgb(110, 7, 26)';
    }
});

showIn.addEventListener('click',() => {
    register.style.zIndex = 4;
    login.style.zIndex = 5;
    register.animate([
        {opacity:'1'},
        {opacity:'0'},
    ],{
        duration:300
    });
    login.animate([
        {opacity:'0'},
        {opacity:'1'},
    ],{
        duration:300
    });
})

showUp.addEventListener('click',() => {
    register.style.zIndex = 5;
    login.style.zIndex = 4;
    login.animate([
        {opacity:'1'},
        {opacity:'0'},
    ],{
        duration:300
    });
    register.animate([
        {opacity:'0'},
        {opacity:'1'},
    ],{
        duration:300
    });
})