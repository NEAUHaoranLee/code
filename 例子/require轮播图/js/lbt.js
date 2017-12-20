requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery-3.2.1'
    }
})
define(['jquery'], function($) {
    function Carousel() {
        this.$container = $('<div class="carousel-container"></div>')
        this.$imgs = $('<div class="carousel-imgs"></div>')
        this.$nav = $('<ul class="carousel-nav"></ul>')
        this.$arrows = $('<div class="carousel-arrows"></div>')
        this.$left = $('<span>&lt;</span>')
        this.$right = $('<span>&gt;</span>')
        this.defaultSettings = {
            imgArr: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
            speed: 1000,
            buttonStyle: 'square',
            selector: document.body
        }
        this.nowIndex = 0

        Carousel.prototype.init = function(setting) {
            $.extend(this.defaultSettings, setting)
            var that = this
            this.$arrows.append(this.$left).append(this.$right)
            this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows).appendTo(this.defaultSettings.selector)
            for (var i = 0; i < this.defaultSettings.imgArr.length; i++) {
                this.$nav.append('<li>' + (i + 1) + '</li>')
                this.$imgs.append('<img src="' + this.defaultSettings.imgArr[i] + '"/>')
            }
            $('li:eq(0)', this.$nav).add($('img:eq(0)', this.$imgs)).addClass('selected')
            $('li', this.$nav).on('mouseover', function() {
                that.nowIndex = $(this).index()
                changeImg()
            })
            if (that.defaultSettings.buttonStyle === 'circle') {
                $('li', this.$nav).css({ borderRadius: '50%' }).html('')
            }
            this.$left.on('click', function() {
                that.nowIndex--
                    if (that.nowIndex == -1) {
                        that.nowIndex = $('li', that.$nav).length - 1
                    }
                changeImg()
            })
            this.$right.on('click', function() {
                that.nowIndex++
                    if (that.nowIndex == $('li', that.$nav).length) {
                        that.nowIndex = 0
                    }
                changeImg()
            })
            $(this.$container).hover(function() { clearInterval(timer) }, function() { play(); })

            function changeImg() {
                $('li', that.$nav).eq(that.nowIndex).add($('img', that.$imgs).eq(that.nowIndex)).addClass('selected').siblings().removeClass('selected')
            }
            var timer

            console.log(this.defaultSettings.speed)

            function play() {
                timer = setInterval(function() {
                    that.$right.trigger('click')
                }, that.defaultSettings.speed)
            }
            play()
        }
    }
    return Carousel
})