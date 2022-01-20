const figure_btns = document.querySelectorAll('.figure_btn');
const tab_contents = document.querySelectorAll('.tab_content');
const banner = document.querySelector('.banner');
const bottom = document.querySelector('.banner_bottom');


function changeTab(event,tab,image){
    figure_btns.forEach(btn => {
        btn.classList.remove('tab_on');
    })
    event.currentTarget.classList.add('tab_on');
    
    tab_contents.forEach(content => {
        content.style.display = 'none';
    })

    document.getElementById(tab).style.display = 'grid';
    
    banner.style.backgroundImage = `url(${image})`;
    bottom.style.backgroundImage = `url(${image})`;
}

figure_btns[0].click();