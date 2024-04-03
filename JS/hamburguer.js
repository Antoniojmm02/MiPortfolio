const hamMenu =document.querySelector('.ham-menu');
const offScreenMenu =document.querySelector('.off-screen-menu');
const hambur= document.querySelector('.hambur');
let lastScrollTop = 0;
let menuOpen= false;
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    hambur.classList.toggle('active')
    if (menuOpen==false){
        menuOpen=true;
    }else{
        menuOpen=false;
    }
});
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && !menuOpen) {
        hambur.style.top = '-100px';
    } else {
        hambur.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});