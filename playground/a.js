require('dotenv').config({ path: `${__dirname}/.env` });
const fetch = require('node-fetch');

const delay = (ms = 2000) => new Promise((res) => setTimeout(res, ms));


(async (shouldRun) => {
  if (!shouldRun) return;
  const res = await fetch('https://swapi.dev/api/planets/')
  console.log(res.status)
  console.log(res.headers)

  console.log(res)
})(
  // true
)

