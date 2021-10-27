
// Simple Koa server with cron job implementation.
// Cron job can be sync/async
// To see logic - it iseasier to run this server and see stdout
// to run - just "npm i" + "node ./playground/basic_cron_server/server.js"

const Koa = require('koa');
const {healthRouter} = require('./health.router')
const {cronJob} = require('./cron.job')
const {someAsyncCronOperation} = require('./cron.operation')
const PORT = 3000

const app = new Koa();

app.use(healthRouter.routes());

cronJob(1000, someAsyncCronOperation)

app.listen(PORT);
console.log(`Server is up and running on port ${PORT}`);

process.on('SIGINT', () => {
  process.exit();
});
