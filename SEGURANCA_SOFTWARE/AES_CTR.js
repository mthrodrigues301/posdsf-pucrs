// to run the code, exec: node AES_CTR.js

var crypto = require('crypto');

function getAlgorithm(keyBase64) {

    var key = Buffer.from(keyBase64, 'base64');
    switch (key.length) {
        case 16:
            return 'aes-128-ctr';
        case 32:
            return 'aes-256-ctr';

    }

    throw new Error('Invalid key length: ' + key.length);
}


function encrypt(plainText, keyBase64, ivBase64) {

    const key = Buffer.from(keyBase64, 'base64');
    const iv = Buffer.from(ivBase64, 'base64');

    const cipher = crypto.createCipheriv(getAlgorithm(keyBase64), key, iv.slice(0, 16));
    let encrypted = cipher.update(plainText, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

function decrypt(messagebase64, keyBase64, ivBase64) {

    const key = Buffer.from(keyBase64, 'base64');
    const iv = Buffer.from(ivBase64, 'base64');

    const decipher = crypto.createDecipheriv(getAlgorithm(keyBase64), key, iv.slice(0, 16));
    let decrypted = decipher.update(messagebase64, 'base64');
    decrypted += decipher.final();
    return decrypted;
}

var keyBase64 = "DWIzFkO22qfVMgx2fIsxOXnwz10pRuZfFJBvf4RS3eY=";
var ivBase64 = Buffer.concat([crypto.randomBytes(12), Buffer.alloc(4, 0)]);
var plainText = 'Hello world!';

var cipherText = encrypt(plainText, keyBase64, ivBase64);
var decryptedCipherText = decrypt(cipherText, keyBase64, ivBase64);

console.log('Algorithm: ' + getAlgorithm(keyBase64));
console.log('Plaintext: ' + plainText);
console.log('Ciphertext: ' + cipherText);
console.log('Decoded Ciphertext: ' + decryptedCipherText);