requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
define(['jquery'],function ($) {
    function dialog1(setting) {
        var html;
        var defaultSetting={
            width:400,
            height:300,
            title:'弹出层',
            content:''
        }
        $.extend(defaultSetting,setting)
        html = '<div class="dialog-container">'
            + ' <div class="dialog-mask"></div>'
            + '<div class="dialog-box">'
            + '<div class="dialog-title">'
            + '<div class="dialog-item">'+defaultSetting.title+'</div>'
            + '<div class="dialog-close">[X]</div>'
            + '</div>'
            +'<div class="dialog-content"></div>'
            + '</div>'
            + '</div>';
        $(document.body).append(html);
        $('.dialog-box').css({
            width:defaultSetting.width,
            height:defaultSetting.height
        })
        $('.dialog-close').on('click',function () {
            $(this).closest('.dialog-container').remove();
        });
        console.log(defaultSetting.content)
        if(defaultSetting.content.indexOf('.html')!=-1){
            $('.dialog-content').load(defaultSetting.content);
        }else{
            $('.dialog-content').html(defaultSetting.content);
        }
    }
    return dialog1 ;
});