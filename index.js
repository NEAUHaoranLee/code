$(function() {
    $('#inputSearch').on('focus', function() {
        if (this.value === this.defaultValue) {
            this.value = ''
        }
    }).on('blur', function() {
        if (this.value == '') {
            this.value = this.defaultValue
        }
    })
    $('.promoted').append('<span class="hot"></span>')
    var $imgs = $('#JS_imgWrap img')
    $imgs.each(function() {
        var $index = $(this).index()
            // console.log('$imgs.length' - '$index')
        $(this).css('zIndex', $imgs.length - $index)
    })

    $('#JS_imgWrap+div').css('zIndex', 999)
    $('#JS_imgWrap+div a').hover(function(param) {
        $(this).addClass('chos').siblings().removeClass('chos')
            // console.log($(this.index()))
        $imgs.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut()
    })
    $('#jnBrandTab li').on('click', function() {
        console.log($(this).index())
            // console.log($('#jnBrandList li').eq(0).innerWidth() * 4 * $(this).index())
        $(this).addClass('chos').siblings().removeClass('chos')
        $('#jnBrandList').stop().animate({
            left: -($('#jnBrandList li').eq(0).innerWidth() * 4 * $(this).index())
        }, 500)
    })

    $('#jnNoticeInfo li').hover(function() {
        this.tempTitle = $(this).attr('title') != undefined ? $(this).attr('title') : $(this).text()
        $('<div id=tip></div>').text(this.tempTitle).appendTo($(document.body))
        $('a', this).removeAttr('title')

        console.log($(this).attr('title'))
    }, function() {
        $('#tip').remove()
        $('a', this).attr('title', this.tempTitle)
    }).on('mousemove', function(e) {
        $('#tip').offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        })
    })
})