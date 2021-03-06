const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');
const { accessLogger, systemLogger } = require('./logger');
const static = require('koa-static');
const Router = require('koa-router');
const kors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const router = require('./routers/router');
//给所有路由添加共同路由开头
const fileRouter = new Router({
    prefix: '/api',
});
//处理文件上传
const multer = require('koa-multer');
const objMulter = multer({ dest: './static' });
const filectrl = require('./routers/filectrl');

app.use(accessLogger());

//静态文件
app.use(static(path.join(__dirname, './static')));
app.use(objMulter.any());
//处理跨域
app.use(kors());
//处理post请求
app.use(bodyParser());
fileRouter
    .post('/file/dealPic', objMulter.single('file'), filectrl.dealPic)
    .post('/file/insertFile', filectrl.insertFile)
    .post('/file/deleteFile', filectrl.deleteFile)
    .post('/file/bannerInsert', filectrl.bannerInsert)
    .post('/file/deletePic', filectrl.deletePic)
    .get('/file/getBannerList', filectrl.getBannerList)
    .get('/file/shareFile', filectrl.shareFile);

app.use(router.routes(), router.allowedMethods());
app.use(fileRouter.routes(), fileRouter.allowedMethods());

app.on('error', error => {
    // console.log('err:', err);
    console.log('error:', error);
    // systemLogger.error(err);
});

app.listen('3000', () => {
    console.log('server is strating at port 3000');
});
