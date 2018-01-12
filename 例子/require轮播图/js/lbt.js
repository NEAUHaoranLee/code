requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery-3.2.1'
    }
})
define(['jquery'], function($) {
    function Lbt() {
        this.$container = $('<div class="carousel-container"></div>')
        this.$imgs = $('<div class="carousel-imgs"></div>')
        this.$nav = $('<ul class="carousel-nav"></ul>')
        this.$arrows = $('<div class="carousel-arrows"></div>')
        this.$prev = $('<span>&lt;</span>')
        this.$next = $('<span>&gt;</span>')
        this.defaultSettings = {
            imgArr: [],
            speed: 1000,
            buttonStyle: 'square', // circle
            selector: document.body
        }
        this.nowIndex = 0;
    }
    Lbt.prototype.init = function(setting) {
        $.extend(this.defaultSettings, setting)
        


    }
    return Lbt;
})