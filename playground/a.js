require('dotenv').config({ path: `${__dirname}/.env` });

const delay = (ms = 2000) => new Promise((res) => setTimeout(res, ms));

// some changes