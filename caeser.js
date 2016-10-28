var cipher = 'lmnopqrstuvwxyzabcdefghijk'.split('');
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//Encryption Section
//This first section takes the argument "text" which is a string. It then splits the string into its individual letters. Then it uses the map method by calling the mapChar function. This returns a number and that number is added to the variable numbersArray.
//After creating the numbersArray variable, encrytped then calls the numbered function and passes numbersArray as its argument and returns its output.
function encrypted(text) {
  var numbersArray = text.split('').map(mapChar);
  return numbered(numbersArray);
}
//This numbered function takes the argument passed to it from encrypted, which should be an array of numbers, calls the map method and calls the mapNum function. It returns the output from that function joined togther. This should be a string of characters.
function numbered(numbers) {
  return numbers.map(mapNum).join('');
}
//This mapChar function takes the parameter char (should be a single letter) which is supplied by the encrypted function. It takes the letter, makes it lowercase, and then gives the idex of the same letter from the global cipher variable. It returns that index number back to encrypted.
function mapChar(char) {
  return cipher.indexOf(char.toLowerCase());
}
//This mapNum function takes the number supplied to it by the numbered function and uses as the index value for the alphabet global variable and then returns the letter at that index.
function mapNum(num) {
  return alphabet[num];
}


//DeEncryption Section - just does the opposite of the encryption section.
function deEncrypted(text) {
  var numbersArray = text.split('').map(mapChar2);
  return numbered2(numbersArray);
}

function numbered2(numbers) {
  return numbers.map(mapNum2).join('');
}

function mapChar2(char) {
  return alphabet.indexOf(char.toLowerCase());
}

function mapNum2(num) {
  return cipher[num];
}

console.log(encrypted('hello'));
console.log(deEncrypted('wtaad'));
