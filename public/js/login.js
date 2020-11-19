import './library/jquery.js';
import './library/jquery.md5.js';
import { baseUrl } from './library/config.js';


$('#submit').on('click', function() {
    let password = $.md5($('#password').val());

    $.ajax({
        type: "post",
        url: `${baseUrl}/users/login`,
        data: {
            username: $('#username').val(),
            password: password,
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
})