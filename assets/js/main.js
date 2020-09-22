$(function () {
    'use strict';

    $('.form-group > .pw').on('click', function () {
        $(this).hasClass('eye-opacity') ? ($(this).removeClass('eye-opacity'), $(this).parent().children('input').attr('type', 'password')) : ($(this).addClass('eye-opacity'), $(this).parent().children('input').attr('type', 'text'));
    });

    $('#registerForm').validate({
        rules: {
            username: {
                required: true,
                minlength: 6,
            },
            password: {
                required: true,
                minlength: 6,
            },
            repeat_pwd: {
                required: true,
                minlength: 6,
                equalTo: '#pwd',
            },
        },
        messages: {
            username: {
                required: 'Vui lòng nhập tên đăng nhập',
                minlength: 'Tên đăng nhập phải dài ít nhất 6 ký tự',
            },
            password: {
                required: 'Vui lòng nhập mật khẩu',
                minlength: 'Mật khẩu phải dài ít nhất 6 ký tự',
            },
            repeat_pwd: {
                required: 'Vui lòng nhập mật khẩu',
                minlength: 'Mật khẩu phải dài ít nhất 6 ký tự',
                equalTo: 'Nhập lại mật khẩu không đúng',
            },
        },
        // errorElement: 'span',
        submitHandler: function (form) {
            form.submit();
        },
    });
});
