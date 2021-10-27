Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/**
 * 
 * @param {object} params {length?: number, chars?: 'numbers' | 'letters'}
 * @returns string
 */
function getRandomString(params = {}) {
  const {length = 10, chars = 'allChars'} = params;
  const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  const symbols = {
    allChars,
    numbers: allChars.match(/[0-9]+/)[0],
    letters: allChars.match(/[a-zA-Z]+/)[0]
  };

  for (let i = 0; i < length; i++) {
    result += symbols[chars].charAt(Math.floor(Math.random() * symbols[chars].length));
  }
  return result;
}