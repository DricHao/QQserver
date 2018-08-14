const router = require('koa-router')();

router.get('/login',async (ctx, next) => {
    ctx.body = {
        code: 0,
        msg: '登录成功咯！',
        data: [
            {
                
            }
        ]
    }
})

module.exports = router