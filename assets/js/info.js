/**
 * Created by llan on 2017/5/11.
 */
(function($){
    var $info = $('.info');
    $info.hide();
    $info.find('.info-close').on('click',function(e){
        e.preventDefault();
        $(this).parent('.info').hide();
    })
})(jQuery);
