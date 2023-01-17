
const delay = (ms = 2000) => new Promise((res) => setTimeout(() => {
  console.log('hi there')
  res()
}, ms));

// Aka parallel
(async () => {
  await Promise.all([ delay(1000), delay(1000)]);
  console.log('ooops')
})();

// Aka one by one
(async () => {
  Promise.all([await delay(1000), await delay(1000)]);
  console.log('ooops')
})();