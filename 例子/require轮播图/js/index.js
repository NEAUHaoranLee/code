requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
})
require(['jquery', 'lbt'], function($, lbt) {
    setting1 = {
        imgArr: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
        speed: 500,
        buttonStyle: 'square', // circle
        selector: '#div1'
    }
    setting2 = {
        imgArr: ['img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
        buttonStyle: 'circle', // circle
        selector: '#div2'
    }
    var c1 = new lbt()
    var c2 = new lbt()
    c1.init(setting1)
    c2.init(setting2)
})