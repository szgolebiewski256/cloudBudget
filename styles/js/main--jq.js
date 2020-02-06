(function ($) {
    var navLinks = $('.navbar-link').not($('.navbar-link').eq(0));
    var homeLink = $('.home-link');
    var navLi = $('.navbar-li');

    //obsluga scrolla
    navLinks.each(function (index, item) {
        var $item = $(item);
        var id = $item.attr('href').replace('#', '');

        $item.on('click', function (e) {
            e.preventDefault();
            console.log(id)
            $('html, body').animate({
                scrollTop: $("#" + id).offset().top - 90
            }, 1000);
        })
    });
    homeLink.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    //chowanie menu
    navLi.on('click', function(){
        var navToggle = $('.navbar-button');
        if(navToggle.is(':visible')){
            navToggle.trigger('click');
        }
    });

    //ta sama wysokosc
    function someHeight(elem) {
        var highestBox = 0;
        if ($(window).width() < 767) {
            $(elem).css('height', 'auto');
        }else{
            $(elem).each(function () {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            })

            $(elem).height(highestBox);
        }
    }

    someHeight('.card-body')
    $(window).resize(function() {
        someHeight('.card-body')
    })
})(window.jQuery)