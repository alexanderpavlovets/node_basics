// Different from Module - revealing part - just pointers to private functions, instead of their implementation

const revealingModule = (function() {
  let privateVar1 = 1
  const publicVar = 'message'

  function privateFunc1 (param) {
    privateVar1 = 'new privateVar' + param
  }

  function publicFunc (param) {
    privateFunc1(param)
    console.log(`Public var is ${publicVar}, and private is ${privateVar1}`)
  }

  return {
    message: publicVar,
    changeAndLogData: publicFunc
  }
})()

revealingModule.changeAndLogData('asd')
revealingModule.message = 'okay' // can't change the public function data
console.log(revealingModule.message)

revealingModule.changeAndLogData('')  // stale closure. "message" here is outdated