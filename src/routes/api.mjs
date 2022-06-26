import Router from '@koa/router';

const Api = (prefix) => {

    const router = new Router({
        prefix
    });
    // just to make sure
    router.get('/', (ctx, next) => {
        ctx.body = {success: true};
    });

    // testing db connection
    router.get('/health/dbconnection', (ctx, next) => {
        ctx.body = {
            success: true,
            dbStatus: false
        };
    });

    return router;
}

export default Api;