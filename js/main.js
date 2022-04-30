
$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu **/
    
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});

const imgBx = document.querySelector('.imgBx');
const slides =  imgBx.getElementsByTagName('img');
var i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length)  % slides.length;
    slides[i].classList.add('active');
}


 // click to scroll top
 $('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100);
})

// AOS Instance
AOS.init();


