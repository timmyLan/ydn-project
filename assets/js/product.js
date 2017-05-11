/**
 * Created by llan on 2017/5/11.
 */
(function ($) {
    $('#show').on('change', function () {
        var $isShow = $('#isShow');
        $isShow.val() == 1 ? $isShow.val(0) : $isShow.val(1);
    });
    $('#submit').on('click', function (e) {
        e.preventDefault();
        var $nameWarning = $('#nameWarning'),
            $name = $('#name'),
            $imgWarning = $('#imgWarning'),
            file = $('#imgFile')[0].files[0],
            reg = new RegExp('^image/', 'i');
        if (file) {
            if (reg.test(file.type)) {
                $imgWarning.hide();
            } else {
                $imgWarning.show();
            }
        }
        if (!$name.val()) {
            $nameWarning.show();
            $name.addClass('input-waring');
        } else {
            $nameWarning.hide();
            $name.removeClass('input-waring');
            var formData = new FormData($('#editProductForm')[0]);
            var id = $('#productId').val();
            $.ajax({
                url: `/admin/editProduct/${id}`,
                type: 'POST',
                data: formData,
                async: false,
                success: function (data) {
                    if (data.status == 200) {
                        var $infoSuccess = $('.info-success');
                        $infoSuccess.find('.info-context').text(data.context);
                        $infoSuccess.show();
                    } else {
                        var $infoDanger = $('.info-danger');
                        $infoDanger.find('.info-context').text(data.context);
                        $infoDanger.show();
                    }
                },
                cache: false,
                contentType: false,
                processData: false
            })
        }
    });
})(jQuery);
