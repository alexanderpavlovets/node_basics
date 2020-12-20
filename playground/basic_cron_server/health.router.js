const Router = require('@koa/router');

const healthRouter = new Router();

healthRouter.get('/health', async (ctx) => {
  console.log('/health endpoint requested');

  ctx.status = 200;
  ctx.body = 'Health is OK';
});

module.exports = {
  healthRouter
};
