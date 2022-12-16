require('dotenv').config({ path: `${__dirname}/.env` });

const delay = (ms = 2000) => new Promise((res) => setTimeout(res, ms));

const crypto = require('crypto');

// const algo = 'aes-256-gcm'; // authTag is needed, iv lenght i don't know - this one is recommended
// const algo = 'aes-256-ccm'; // authTag + iv should have 12 lenght
const algo = 'aes-256-cbc'; // works - but this is old one
const aesKey = "7gi4TdisMoJiEJZi49DsHlFh34O/vgXqCCdYWJvSolg="; //base64
const iv = crypto.randomBytes(16);

const reqBody = {

};

function encryptReq(body, aesKey, iv) {
  console.log('Initial body:');
  console.log(body);

  let cipher = crypto.createCipheriv(algo, Buffer.from(aesKey, 'base64'), iv);
  let encrypted = cipher.update(JSON.stringify(body));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const res = {
    content: encrypted.toString('base64'),
    nonce: iv.toString('base64'),
  };

  console.log('Encrypted:');
  console.log(res);
  return res;
}

function decryptReq({ content, nonce }, aesKey) {
  const iv = Buffer.from(nonce, 'base64');
  const encryptedData = Buffer.from(content, 'base64');

  const decipher = crypto.createDecipheriv(
    algo,
    Buffer.from(aesKey, 'base64'),
    iv,
  );
  const decrypted = decipher.update(encryptedData);
  const decryptedFinal = Buffer.concat([decrypted, decipher.final()]);
  const data = JSON.parse(decryptedFinal.toString());

  console.log('Decrypted:');
  console.log(data);
  return data;
}

const encryptionResult = encryptReq(reqBody, aesKey, iv);
decryptReq(encryptionResult, aesKey);


/* Uncomment this to decrypt: 
  - change aesKey
  - run
*/
// const encrypted = {
//   "content": "57olBhPeSFfWD7zamn+nTO1zD3ajqxX+zmpwbYTaZiP8h7UTIkonbAPQ04I0/3xsLLVMMu57XWlnXfj/5lRwDcPPSkewSkJ0WsQVSyfr4QFSQMAOFwH1BjtJOwhfkmB9",
//   "nonce": "OOfH51+2xxWWpt9hkWSHMA=="
// }
// decryptReq(encrypted, aesKey);

