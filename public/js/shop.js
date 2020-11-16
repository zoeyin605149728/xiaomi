import './library/jquery.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';

(function() {
    let shop = cookie.get('shop');

    if (shop) { // 有cookie数据才发请求
        shop = JSON.parse(shop);

        let idList = shop.map(elm => elm.id).join();

        $.ajax({
            type: "get",
            url: `${baseUrl}/product/getItems`,
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                let template = '';
                // console.log(res);

                res.forEach((elm, i) => {
                    // 现在遍历数据时是按照数据库查询得到的结果遍历
                    // cookie中存放的数据 的顺序  和 查询结果的顺序不同
                    // 需要让cookie中的id和查询结果的id 一一对应
                    // 索引不同
                    let arr = shop.filter(val => val.id === elm.id);
                    console.log(arr)
                    console.log(`${elm.oldprice}`)
                        // console.log(arr);

                    let picture = JSON.parse(elm.picture);

                    template += ` <li class="shop-li">
                    <div>
                        <input type="checkbox">
                    </div>
                    <div><img src=".${picture[0].src}" alt=""></div>
                    <div>${elm.title}</div>
                    <div> ${elm.oldprice.toFixed(2)}</div>
                    <div>
                        <div>
                            <a>-</a>
                            <input type="text" value="${arr[0].num}" min="1" max="${elm.number}">
                            <a>+</a>
                        </div>
                    </div>
                    <div class="pri">${(elm.oldprice*arr[0].num).toFixed(2)}元</div>
                    <div>
                        <div>
                            <a class="del">
                            x
                            </a>
                        </div>
                    </div>
                </li>`

                    $('.shoping').append(template);





                });


            }
        });
    }

})();