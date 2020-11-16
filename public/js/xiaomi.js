import $ from './library/jquery.js';
import { baseUrl } from './library/config.js';



(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        dataType: "json",
        success: function(res) {
            // 获得数据后进行字符串拼接
            let tempLi = '';
            res.forEach((elm, i) => {
                // console.log(elm)

                let picture = JSON.parse(elm.picture)
                console.log(picture);

                tempLi += ` 
                <a href="./xiangqingye.html?id=${elm.id}">
                <img src="${picture[0].src}" alt="">
                <p>
                    ${elm.title}
                </p>
                <span class="span1">${elm.detailone}</span>
                <span class="span2"><span>${elm.oldprice}元</span></span>
                
            </a>`;


            });
            $('.select').append(tempLi);

        }
    });
})();







//1，购物车
// 鼠标移入显示购物车，并且改变颜色和背景
$('.topbar-cart').on('mouseenter', function() {
        // $('.noshop').slideDown();
        $(this).children(".noshop").show();
        $('.cart-mini').css('background', '#fff')
        $('.cart-mini').css('color', '#ff6700')
    })
    // 鼠标移入关闭购物车，并且改变颜色和背景
$('.topbar-cart').on('mouseleave', function() {
        // $('.noshop').slideUp();
        $(this).children(".noshop").hide();
        $('.cart-mini').css('background', ' #b0b0b0')
        $('.cart-mini').css('color', '#424242')
    })
    // 鼠标移入购物车中，保持颜色和背景改变
$('.noshop').on('mouseenter', function() {
    $('.cart-mini').css('background', '#fff')
    $('.cart-mini').css('color', '#ff6700')
})


// 2.导航
// $('.threea').on('click', function() {
//     $('.threediv').css('display', 'block')
// })

//3 轮播图导航
$('.threeul>li').on('mouseover', function() {
    $('.threedivmain>div').eq($(this).index()).css('display', 'block');
    $('.threedivmain').css('display', 'block');
    $('.threedivmain>div').eq($(this).index()).siblings().css('display', 'none');


    $(this).css('background', '#ff6700');
    $(this).siblings('li').css('background', 'rgba(0,0,0,0)');

})

$('.threeul>li').on('mouseout', function() {
    $('.threedivmain>div').css('display', 'none');
    $(this).css('background', 'rgba(0,0,0,0)');

})
$('.threeul').on('mouseout', function() {
    $('.threedivmain').css('display', 'none');

})
$('.threedivmain>div').on('mouseover', function() {
    $(this).css('display', 'block')
    $('.threedivmain').css('display', 'block');
    $(this).siblings().css('display', 'none')
    $('.threeul>li').eq($(this).index()).css('background', '#ff6700');
    $('.threeul>li').eq($(this).index()).siblings('li').css('background', 'rgba(0,0,0,0)');
})
$('.threedivmain>.threediv').on('mouseout', function() {
    $('.threeul>li').eq($(this).index()).css('background', 'rgba(0,0,0,0)')
    $(this).css('display', 'none')
    $('.threedivmain').css('display', 'none');
})
$('.threediv>div>p').on('mouseover', function() {
    $(this).css('color', '#ff6700')
})
$('.threediv>div>p').on('mouseout', function() {
    $(this).css('color', '#000')

})





// 小米闪购
function obj() {
    var nowtime = new Date();
    var time = new Date(nowtime.getFullYear(), nowtime.getMonth(), nowtime.getDate() + 1);
    var temp = parseInt((time - nowtime) / 1000); //相隔多少秒

    var T = parseInt(temp / (3600 * 24));
    var hour = parseInt((temp / 3600) - 24 * T);
    var minutes = parseInt(temp % 3600 / 60);
    var second = temp % 60;

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;
    $('.hour').html(hour);
    $('.minutes').html(minutes);
    $('.second').html(second);
}
obj();
setInterval(function() {
    obj()
}, 1000)

// 回到顶部
$('.top-last').hide();
$(window).scroll(function(e) {
    if ($(window).scrollTop() > 400)
        $(".top-last").fadeIn(500);
    else
        $(".top-last").fadeOut(500);

});
$('.top-last').on('click', function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500)
})