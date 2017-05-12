/**
 * Created by llan on 2017/5/11.
 */
(function ($) {
    $('#submit').on('click', function (e) {
        e.preventDefault();
        let uploadErrorMsg = '';
        var $imgWarning = $('.imgWarning'),
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
        if(uploadErrorMsg){
            return false;
        }
        let formData = new FormData($('#editCompanyForm')[0]),
        actionUrl = '/admin/company';
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
    });
})(jQuery);
