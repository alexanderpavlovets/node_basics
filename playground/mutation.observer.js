
// const config = { attributes: true, childList: true, subtree: true }
const config = { childList: true }

const cb = function(mutationList, observer) {
  for (let mutation of mutationList) {
    console.log(mutation)
  }
}

const observer = new MutationObserver(cb)

observer.observe(document.querySelector('.contentPadding'), config)