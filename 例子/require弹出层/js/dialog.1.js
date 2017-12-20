requirejs.config({
    baseUrl: 'j s',
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
define(['jquery'], function($) {
    function dialog1(setting) {
        var html;
        var defaultSetting = {
            width: 400,
            height: 300,
            title: '弹出层',
            content: ''
        }
        $.extend(defaultSetting, setting)
    }
})