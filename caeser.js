var alphabet = 'lmnopqrstuvwxyzabcdefghijk';

function mapChar(char) {
  return alphabet.indexOf(char.toLowerCase());
}

function encrypted(text) {
  return text.split('').map(mapChar).join('');
}

console.log(mapChar('k'));
console.log(encrypted('k'));
