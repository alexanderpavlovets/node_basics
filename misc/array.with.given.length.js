
const arr = Array.from(Array(50), (el, ind) => {
  return {email: `autotest${ind}@email.com`, password: 'Password1!'}
})

console.log(arr)
