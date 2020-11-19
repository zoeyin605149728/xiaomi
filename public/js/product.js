import './library/jquery.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';


(function() {
    let id = location.search.split('=')[1]; // 获得商品id


    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getItem`,
        data: { id: id },
        dataType: "json",
        success: function(res) {
            // console.log(res);
            res = res[0];
            let picture = JSON.parse(res.picture);


            let template = `
               ${res.details}
                `;
            $('.toptext').append(template)


            let title = `
            <p>${res.title}</p>
            `;
            $('.top').append(title)


            let price = `
            <p>${res.oldprice}</p><del>${res.newprice}</del>
            `;
            $('.price').append(price)

            let total = `
            <div class="totaltop">
            <p>${res.title}</p>
            <span>${res.oldprice}</span>
        </div>
        <div class="totallast">总计${res.oldprice}元</div>
            `
            $('.total').append(total);


            let num = 0;
            $('.input1').on('click', function() {
                num++;
                $('.span2').html(`${num}`)
                addItem(res.id, $('.span2').text())

            })
        }
    })





    function addItem(id, num) {
        let shop = cookie.get('shop'); // 从cookie中获得shop数据

        let product = {
            id: id,
            num: num
        }

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop); // 将取出的cookie数据转成对象

            // 判断cookie中的购物车数据 是否已存在本条数据的id
            // 如果本条数据的id已存在 修改数量
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(el => {
                    el.id === id ? el.num = num : null;
                });
            } else {
                shop.push(product);
            }

        } else { // cookie中不存在shop数据
            shop = []; // 设置一个数组
            shop.push(product); // 将当前商品存入数组
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }



})();