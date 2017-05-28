/**
 * Created by llan on 2017/5/16.
 */
(function ($) {
    const fontKey = 'myPassword';
    $('#submit').on('click', function (e) {
        e.preventDefault();
        var $name = $('#name'),
            $password = $('#password'),
            $rePassword = $('#re-password');
        if (!$name.val()) {
            $('#nameWarning').show();
            $name.addClass('input-waring');
            return false;
        } else {
            $('#nameWarning').hide();
            $name.removeClass('input-waring');
        }
        if (!$password.val()) {
            $('#passwordWarning').show();
            $password.addClass('input-waring');
            return false;
        } else {
            $('#passwordWarning').hide();
            $password.removeClass('input-waring');
        }
        if (!$rePassword.val()) {
            $('#rePasswordWarning').show();
            $rePassword.addClass('input-waring');
            return false;
        } else {
            $('#rePasswordWarning').hide();
            $rePassword.removeClass('input-waring');
        }
        if ($password.val() !== $rePassword.val()) {
            $rePassword.addClass('input-waring');
            $password.addClass('input-waring');
            $('#rePasswordWarning').text('注意:输入的两次密码必须相同').show();
        } else {
            $rePassword.removeClass('input-waring');
            $password.removeClass('input-waring');
            $('#rePasswordWarning').hide().text('注意:重复用户密码必须填写');
        }
        var password = md5($password.val(), fontKey);
        var rePassword = md5($rePassword.val(), fontKey);
        var data = {
            name: $name.val(),
            password: password,
            rePassword: rePassword
        };
        var actionUrl = '/cysd/user';
        $.ajax({
            url: actionUrl,
            type: 'POST',
            data: data,
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
    })
})(jQuery);
