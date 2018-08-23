var events = (function() {

    var typeOfferEvent = $('.type-offer-event');

    function bind() {
        typeOfferEvent.on('click', function() {
            typeOfferEvent.removeClass('active');
            $(this).addClass('active');

            if ($(this).hasClass('stroitelnie')) {
                $('#carouselMebelnieMateriali').hide();
                $('#carouselStroilenieMateriali').show();
            } else {
                $('#carouselStroilenieMateriali').hide();
                $('#carouselMebelnieMateriali').show();
            }
        });

        $('a.rooms-action').on('click', function(){
            $('html, body').animate({
                scrollTop: $(".production").offset().top
            }, 1000);
        });

        $('a.menu-action').on('click', function(){
            $('html, body').animate({
                scrollTop: $(".services").offset().top
            }, 1000);
        });

        $('a.shares-action').on('click', function(){
            $('html, body').animate({
                scrollTop: $(".quality").offset().top
            }, 1000);
        });

        $('a.contacts-action').on('click', function(){
            $('html, body').animate({
                scrollTop: $(".order").offset().top
            }, 1000);
        });
    }


    return {
        start: function() {
            bind()
        }
    };
}());

events.start();