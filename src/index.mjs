import Koa from 'koa';
import Cabin from 'cabin';
import pino from 'pino';
import signalepkg from 'signale';

const pinoInstance = pino({
  customLevels: {
    log: 30,
  },
  hooks: {
    // <https://github.com/pinojs/pino/blob/master/docs/api.md#logmethod>
    logMethod(inputArgs, method) {
      return method.call(this, {
        // <https://github.com/pinojs/pino/issues/854>
        // message: inputArgs[0],
        msg: inputArgs[0],
        meta: inputArgs[1],
      });
    },
  },
});

const env = process.env.NODE_ENV || 'development';

const cabin = new Cabin({
  axe: {
    logger: env === 'production' ? pinoInstance : new signalepkg.Signale(),
  },
});

import api from './routes/api.mjs';

const apiPrefix = '/api';

const app = new Koa({
  env,
});

app.use(cabin.middleware);

app.use(api(apiPrefix).routes());
app.use(api(apiPrefix).allowedMethods());

app.listen(3000);

