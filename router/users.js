// 路由 负责数据库的登录注册

// const express = require('express');
// const Router = express.Router();

// Router.get('/', (require, response, next) => {
//     console.log(require.query)
// })
const express = require('express');
// 2. 使用express提供的路由函数 创建一个路由对象
const router = express.Router();
// 路由内容
router.get('/', (req, res, next) => {
    // 接收前端发送的数据
    // get数据通过 req.query 获取
    // 获取内容是一个对象
    console.log(req.query);
    res.json({
        username: req.query.username,
        msg: '用户名可以使用'
    });
})