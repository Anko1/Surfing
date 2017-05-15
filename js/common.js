$(function () {
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
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
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

    var count = $('#carousel-example-generic .carousel-inner').find('.item').length;

    $('#c-info').text(currentIndex + '/' + count);
}

window.onload = function () {
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-btn");
    playButton.addEventListener("click", function () {
        video.play();
        playButton.style.display = "none";
    });

    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.style.display = "none";
        } else {
            video.pause();
            playButton.style.display = "block";
        }
    });
}