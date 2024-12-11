const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js');

const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
};

const decodeMessage = (str) => {
  // Implement the reverse of encodeMessage
  return caesarCipher(symbolCipher(reverseCipher(str, -6)));
};

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } else if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } else {
    console.log('Invalid command. Use "encode" or "decode".');
    process.exit();
  }
  console.log(output);
  process.exit();
};

process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
