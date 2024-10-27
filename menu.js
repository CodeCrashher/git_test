$(document).ready(function () {
    $('.nav a[href^="#"]').click(function () { // выбор ссылки с атрибутом href, начинающимся с #
        var offset = $('.nav').innerHeight(); // Высота навигации
        var target = $(this).attr('href'); // Сохраняем ссылку на элемент
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 500); // время анимации
        $('.nav a[href^="#"]').removeClass('active');
        $(this).addClass('active'); // добавить класс активной ссылке
        return false;
    });
});