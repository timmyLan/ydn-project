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
        let uploadErrorMsg = '';
        var $nameWarning = $('#nameWarning'),
            $name = $('#name'),
            $imgWarning = $('.imgWarning'),
            $files = $("input[type='file']"),
            reg = new RegExp('^image/', 'i');
        $imgWarning.hide();
        $.each($files, function (key, value) {
            if (value.files[0]) {
                if (reg.test(value.files[0].type)) {
                    $imgWarning.eq(key).hide();
                } else {
                    $imgWarning.eq(key).show();
                    uploadErrorMsg = 'file type is wrong!';
                    return false;
                }
            }
        });
        if (uploadErrorMsg) {
            return false;
        }
        if (!$name.val()) {
            $nameWarning.show();
            $name.addClass('input-waring');
            return false;
        } else {
            $nameWarning.hide();
            $name.removeClass('input-waring');
            var id = $('#productId').val();
            var formData,
                actionUrl;
            if (!id) {
                //添加产品
                formData = new FormData($('#addProductForm')[0]);
                actionUrl = '/admin/addProduct';
            } else {
                //修改产品
                formData = new FormData($('#editProductForm')[0]);
                actionUrl = `/admin/editProduct/${id}`;
            }
            $.ajax({
                url: actionUrl,
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
