$(function() {
    // $('.carousel').carousel({
    //     interval: NaN
    // });

    cal_carous();

// Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

function c_move(dir) {
    // alert(dir);
    $('.carousel').carousel(dir);

    $('.carousel').on('slid.bs.carousel', function () {
        cal_carous();
    });

}
function cal_carous() {
    var currentIndex = $('div.active').index() + 1;
    var count = document.getElementsByClassName('item').length;

    $('#c-info').text(currentIndex + '/' + count);
}