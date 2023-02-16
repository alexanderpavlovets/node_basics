
const chainPromises =
  (array, initialParam) =>
    array.reduce((acc, promiseResolver) => {
      return Promise.resolve(acc).then(promiseResolver);
    }, Promise.resolve(initialParam));

const someAsyncAction = async (param) => {
  console.log(`I got ${param} param and will return ${param + 1}`)
  return param + 1
}

(async () => {
  const chain = [someAsyncAction, someAsyncAction, someAsyncAction]
  const a = await chainPromises(chain, 1)
  console.log(a)
})()
