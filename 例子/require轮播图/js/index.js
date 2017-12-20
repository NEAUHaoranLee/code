requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
require(['jquery', 'lbt'], function($, lbt) {
    var c1=new lbt();
    var settings1 = {
        imgArr: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
        speed: 500,
        buttonStyle: 'square', //circle
        selector: '#div1'
    };
    c1.init(settings1);

    var c2=new lbt();
    var settings2 = {
        imgArr: ['img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
        buttonStyle: 'circle', //circle
        selector: '#div2'
    };
    c2.init(settings2);
    });
