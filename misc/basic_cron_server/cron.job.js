
function cronJob(ms, fn) {
  let timeout = setTimeout(cb, ms)

  async function cb() {
      clearTimeout(timeout)
      await fn()
      timeout = setTimeout(cb, ms)
  }
}

module.exports = {
  cronJob
}