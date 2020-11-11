import $ from './library/jquery.js';

//1，购物车
// 鼠标移入显示购物车，并且改变颜色和背景
$('.topbar-cart').on('mouseenter', function() {
        $('.noshop').slideDown();
        // $(this).children(".noshop").show();
        $('.cart-mini').css('background', '#fff')
        $('.cart-mini').css('color', '#ff6700')
    })
    // 鼠标移入关闭购物车，并且改变颜色和背景
$('.topbar-cart').on('mouseleave', function() {
        $('.noshop').slideUp();
        // $(this).children(".noshop").hide();
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
    $('.threedivmain>div').eq($(this).index()).siblings().css('display', 'none');

    $(this).css('background', '#ff6700');
    $(this).siblings().css('background', 'rgba(0,0,0,0)');
})

$('.threedivmain>div').on('mouseover', function() {
    $(this).css('display', 'block')
    $(this).siblings().css('display', 'none')
    $('.threeul>li').eq($(this).index()).css('background', '#ff6700');
    $('.threeul>li').eq($(this).index()).siblings().css('background', 'rgba(0,0,0,0)');
})



$('.threedivmain>.threediv').on('mouseout', function() {
    $('.threeul>li').eq($(this).index()).css('background', 'rgba(0,0,0,0)')
    $(this).css('display', 'none')

})
$('.threediv>div>p').on('mouseover', function() {
    $(this).css('color', '#ff6700')

})
$('.threediv>div>p').on('mouseout', function() {
    $(this).css('color', '#000')

})