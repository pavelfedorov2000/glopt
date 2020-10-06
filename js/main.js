window.addEventListener('DOMContentLoaded', function() {

    let overlay = document.querySelector('.overlay'),
        thanks = document.getElementById('#thanks'),
        leadBtn = document.querySelector('.button_form'),
        callBtn = document.querySelector('.button_call'),
        modalClose = document.querySelector('.modal__close'),
        slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.slider__prev'),
        next = document.querySelector('.slider__next');

    leadBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
    });

    callBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        thanks.style.display = 'block';
    });

    modalClose.addEventListener('click', function() {
        overlay.style.display = 'none';
        thanks.style.display = 'none';
    });

    // Slider (client's reviews)

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); // перебираем все слайды и отключаем их
        slides[slideIndex - 1].style.display = 'block'; // оставляем один нужный слайд
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n); // текущий слайд
    }

    prev.addEventListener('click', function() {
        plusSlides(-1); // предыдущий слайд
    });

    next.addEventListener('click', function() {
        plusSlides(1); // следующий слайд
    });

    $('.hamburger-menu').on('click', function(){
        $('.header__menu').addClass('header__menu_active');
    });
    $('.close').on('click', function(){
        $('.header__menu').removeClass('header__menu_active');
    });


    $('.button_form').on('submit', function() {
        $('#thanks').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name:  {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Минимум {0} cимвола!")
                },
                tel: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    validateForms('.price__form');
    validateForms('#consultation form');


    $('input[name=phone]').mask("+375 (99) 999-99-99"); //  маска ввода в инпутах

    new WOW().init(); // для анимации блоков как только пользователь долистывает до их секции
});