requirejs.config({
    // baseUrl: 'js',
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
require(['jquery','dialog'],function ($,dialog1) {
    $('#open').on('click',function () {
       var setting={
            width:300,
           height:200,
           title:'注册',
        content:'regist.html'
        }
        dialog1(setting);
       // var d1=new Dialog1();
       //  d1.open(setting);
    })

});
