/**
 * Created by llan on 2017/5/16.
 */
(function ($) {
    var $modal = $('#modal');
    var id;
    $modal.hide();
    $('.delete-button').on('click', function (e) {
        e.preventDefault();
        id = $(this).data('id');
        var name = $(this).data('name');
        $modal.find('h3>span').text(name);
        $modal.show();

    });
    $('.delete-cancel').on('click', function (e) {
        e.preventDefault();
        $modal.hide();
    });
    $('.delete-confirm').on('click', function (e) {
        e.preventDefault();
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
        });
        $modal.hide();
    });
})(jQuery);
