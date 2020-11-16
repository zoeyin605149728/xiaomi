import './library/jquery.js';
import './library/jquery.md5.js';
import cookie from './library/cookie.js';

$('#submit').on('click', function() {
    // 省略1万字的表单验证环节
    let password = $.md5($('#password').val());
    $.ajax({
        type: "post",
        url: "http://localhost:8888/users/reg",
        data: {
            username: $('#username').val(),
            password: password,
        },
        dataType: "json",
        success: function(response) {
            console.log(response);

        }
    });
});