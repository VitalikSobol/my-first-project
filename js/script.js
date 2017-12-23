(function ($) {
    $(document).ready(function () {

        /* Всплывающий номер телефона*/

        $('.tel-mfp-inline').magnificPopup({
            type: 'inline'
        });

        /* Скрывающее меню <576px*/

        $('#menu').on('click', function () {
            $('ul.nav li:not(:first-child)').toggleClass('show');
        });


    });
})(jQuery);
