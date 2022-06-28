import Router from '@koa/router';

import dbConnCheck from '../db/dbops.mjs';


const api = (prefix) => {
  const router = new Router({
    prefix,
  });
    // just to make sure
  router.get('/', (ctx, next) => {
    ctx.body = {success: true};
  });

  // testing db connection
  router.get('/health/dbconnection', async (ctx, next) => {
    ctx.logger.info('visited home page');
    try {
      await dbConnCheck();
      ctx.body = {
        success: true,
        dbStatus: false,
      };
    } catch (error) {
      ctx.body = {
        success: false,
        dbStatus: false,
      };
    }
  });

  return router;
};

export default api;
