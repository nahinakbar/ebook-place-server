import Koa from 'koa';

import Api from './routes/api.mjs';

const apiPrefix = '/api';

const app = new Koa({
    env: process.env.NODE_ENV || 'development'
});

app.use(Api(apiPrefix).routes());
app.use(Api(apiPrefix).allowedMethods());

app.listen(3000);

