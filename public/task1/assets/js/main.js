jQuery(document).ready(function(){
    $('.c-anchor-link__item a').click(function(event) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 500);
   });
})