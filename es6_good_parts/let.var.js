
// Kylu saing to use let and var together

function a() {

  // Good for let - separate scope
  for (let i = 0; i < 10; i++) {
    // ...
  }

  // Good for var - when need to "say", that variable is across the scopes. If let will be used, it is just new assigments
  if ( '123' ) {
    var a = 1
    // ...
  } else if( '123' ) {
    var a = 5
    // ...
  } else {
    var a = 78
    // ...
  }
  console.log(a)
}

a()
