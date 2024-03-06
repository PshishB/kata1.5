 const slider = new Swiper('.swiper', {
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
        
    slidesPerView: 'auto',
        
    spaceBetween: 16,
    
    on: {
        resize: function enableOnlyMobile(swiper){
            if (768 <= window.innerWidth){
                swiper.disable();
                swiper.el.classList.add('-non-slider')
            }else{
                swiper.enable();
                swiper.el.classList.remove('-non-slider');
            }
        }
    }
});
var button = document.querySelector('.brand__more');
var buttonHide = document.querySelector('.hide');
var buttonShow = document.querySelector('.show')
var imgShow = document.querySelector('.more__img');
var companys = document.querySelectorAll('.brand__item');

document.addEventListener('DOMContentLoaded', function () {
    if(window.screen.width < 1008){
        for (var i =  6; i < companys.length; i++) {
            companys[i].classList.add('hidden');
        }
    }
    if(window.screen.width > 1008){
        for (var i =  8; i < companys.length; i++) {
            companys[i].classList.add('hidden');
        }
    }
})

button.addEventListener('click', function() {
    if (window.screen.width < 1008){
        if (buttonHide.classList.contains('hidden')) {
            buttonShow.classList.add('hidden');
            buttonHide.classList.remove('hidden');
            imgShow.classList.add('reverse');
            for (var i =  6; i < companys.length; i++) {
                companys[i].classList.remove('hidden');
            }
        } else {
            buttonShow.classList.remove('hidden');
            buttonHide.classList.add('hidden');
            imgShow.classList.remove('reverse');
            for (var i =  6; i < companys.length; i++) {
                companys[i].classList.add('hidden');
            }
        }
    }
    if(window.screen.width > 1008) {
        if (buttonHide.classList.contains('hidden')) {
            buttonShow.classList.add('hidden');
            buttonHide.classList.remove('hidden');
            imgShow.classList.add('reverse');
            for (var i =  8; i < companys.length; i++) {
                companys[i].classList.remove('hidden');
            }
        } else {
            buttonShow.classList.remove('hidden');
            buttonHide.classList.add('hidden');
            imgShow.classList.remove('reverse');
            for (var i =  8; i < companys.length; i++) {
                companys[i].classList.add('hidden');
            }
        }
    }
});