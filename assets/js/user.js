/**
 * Created by llan on 2017/5/12.
 */
(function ($) {
    const fontKey = 'myPassword';
    $('#loginForm').on('submit', function (e) {
        var $name = $('#name'),
            $password = $('#password');
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
        var password = md5($password.val(), fontKey);
        $('#changePassword').val(password);
    });
})(jQuery);
