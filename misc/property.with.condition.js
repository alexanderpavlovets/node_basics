const customer = {
  user: {
    // email: '1'
  }
}

const a = {
  ...(customer.user?.email && {
    email: customer.user?.email,
  }),
  ...undefined,
}

console.log(a);