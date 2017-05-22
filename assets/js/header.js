/**
 * Created by llan on 2017/5/22.
 */
(function($){
    var $qrCode = $('.qr-code');
    $qrCode.hide();
    $('.icon-li').hover(function(){
        $(this).find('.qr-code').show();
    },function(){
        $(this).find('.qr-code').hide();
    });
})(jQuery);
