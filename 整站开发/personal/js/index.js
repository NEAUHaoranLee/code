var ifScroll = function () {
    if ($(document).scrollTop() >= 100) {
        $('.nav').css({
            'background': '#fff',
        });
        $('.title1').css({
            'color': 'rgb(95, 95, 95)'
        })
    } else {
        $('.nav').css({
            'background': 'transparent',
        });
        $('.title1').css({
            'color': '#fff'
        })
    }
}
ifScroll();
$(document).scroll(function () {
    // console.log($(document).scrollTop());
    $('.main-picture').css({
        'top': $(document).scrollTop() * 0.8,
    });

    ifScroll();
});
$('.skills-son1').hover(function () {
    $('.icon-change1').css({
        'borderColor': '#ff5151',
        'box-shadow': ' 2px 2px 4px rgba(0, 0, 0, 0.5)'

    });
    $('.icon-change1 i').css({
        'color': '#ff2d2d',

    })
}, function () {
    $('.icon-change1').css({
        'borderColor': '#515769',
        'box-shadow': ''
    });
    $('.icon-change1 i').css({
        'color': '#515769'
    })
});
$('.skills-son2').hover(function () {
    $('.icon-change2').css({
        'borderColor': '#00ffff',
        'box-shadow': ' 2px 2px 4px rgba(0, 0, 0, 0.5)'

    });
    $('.icon-change2 i').css({
        'color': '#00ffff',

    })
}, function () {
    $('.icon-change2').css({
        'borderColor': '#fff',
        'box-shadow': ''
    });
    $('.icon-change2 i').css({
        'color': '#fff'
    })
});
$('.skills-son3').hover(function () {
    $('.icon-change3').css({
        'borderColor': '#ffff00',
        'box-shadow': ' 2px 2px 4px rgba(0, 0, 0, 0.5)'

    });
    $('.icon-change3 i').css({
        'color': '#ffff00',

    })
}, function () {
    $('.icon-change3').css({
        'borderColor': '#515769',
        'box-shadow': ''
    });
    $('.icon-change3 i').css({
        'color': '#515769'
    })
});
$('.product-son-content').hover(function () {
    $(this).css({
        'top': '-50px'
    });
}, function () {
    $(this).css({
        'top': '0px'
    });
}).on('click', function () {
    var imgClass = $(this).attr('id')
    layer.open({
        type: 1,
        content: $('.' + imgClass + ''),
        // content: 'sdadasdasdasdlkasjhdjhyasdhsa'
    })
})

// console.log($('p', $('.product-son1')));