const moment = require('moment')

const pause = (ms) => new Promise(res => setTimeout(res, ms))

async function someAsyncCronOperation() {
  const nowSecond = moment().format('ss')
  console.log(nowSecond)
  
  if (nowSecond % 5 === 0) {
    console.log('Starting async operation for each 5 seconds')
    await pause(2000)
    console.log('I am after 2 sec delay (i simulate async)')
  } 
}

module.exports = {
  someAsyncCronOperation
}