
// Weird example :) 

function bruteForceSubstringSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  for (let i = 0; i < textLength; i++) {
      let j;
      for (j = 0; j < patternLength; j++) {
          if (text.charAt(i + j) !== pattern.charAt(j)) {
                 break;
          }
      }
      if (j === patternLength) return i;
  }
  return textLength;
}

const res = bruteForceSubstringSearch('this is a test', 'test');
console.log(res)

