let mainSection = document.getElementById("mainSection");
let hambergerBtn=document.getElementById("hambergerBtn");
let collapseMenu = document.getElementById("collapseMenu");
let heroBannerTitle = document.getElementById("heroBannerTitle");
let navbarTitle = document.getElementById("navbarTitle");
hambergerBtn.onclick=function(){
    hambergerBtn.classList.toggle('cross');
    collapseMenu.classList.toggle('show');
    heroBannerTitle.classList.toggle('blur-effect');
    navbarTitle.classList.toggle('nav-title');
    mainSection.classList.toggle('overflow-hidden');

}
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


let current = 0,
main = document.getElementById('sliderScroll')
slides = document.querySelectorAll('.slider');
slideImg = document.querySelectorAll('.overlay');

function slideShow() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden')
        slides[i].classList.remove('visible')

        for (let j = 0; j < slideImg.length; j++) {
            slides[i].classList.add('hidden')
            slides[i].classList.remove('visible')
        }
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    current = (current != slideImg.length - 1) ? current + 1 : 0;
    slides[current].classList.remove('hidden')
    slideImg[current].classList.remove('hidden')
    slides[current].classList.add('visible')
    slideImg[current].classList.add('visible')

};

main.addEventListener("wheel", slideShow);

