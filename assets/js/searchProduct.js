/**
 * Created by llan on 2017/5/16.
 */
(function ($) {
    $('.delete-button').on('click', function (e) {
        e.preventDefault();
        var id = $(this).data('id');
        var actionUrl = '/admin/deleteProduct/' + id;
        $.ajax({
            url: actionUrl,
            type: 'POST',
            success: function (data) {
                $('.info').hide();
                if (data.status == 200) {
                    var $infoSuccess = $('.info-success');
                    $infoSuccess.find('.info-context').text(data.context);
                    $infoSuccess.show();
                } else {
                    var $infoDanger = $('.info-danger');
                    $infoDanger.find('.info-context').text(data.context);
                    $infoDanger.show();
                }
            }
        })
    });
})(jQuery);
