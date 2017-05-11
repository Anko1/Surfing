$(function() {
    $('.carousel').carousel({
        interval: NaN
    });

    cal_carous();
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