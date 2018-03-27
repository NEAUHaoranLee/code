$('.menuchild-li').on('click', function() {
    if ($('ul', this).height() == 0) {
        $('ul', this).css({
            'height': $('ul li', this).length * 36 + 'px'
        })
    } else {
        $('ul', this).css({
            'height': 0 + 'px'
        })
    }

    // console.log($('ul', this).height());
});
let $mask = $('.mask');
$('#menu-holder').on('click', function() {
    $('#menu-list').css({ 'width': 270 + 'px' });
    $mask.fadeIn(500);

});
$mask.on('click', function() {
    $('#menu-list').css({ 'width': 0 });
    $mask.fadeOut(500);
})