// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const standardAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    if(!alphabet || alphabet.length !== 26){
      return false;
    }
    const setAlphabet = new Set(alphabet.split(""));
    if (setAlphabet.size !== 26) {
      return false;
    }
    const substituteAlphabet = alphabet.split("");
    input = input.toLowerCase();
    const encodeKeyMap = standardAlphabet.reduce((obj, letter, i) => {
      obj[letter] = substituteAlphabet[i];
      return obj;
    }, {}); //{a:b}
    const decodeKeyMap = substituteAlphabet.reduce((obj, letter, i) => {
      obj[letter] = standardAlphabet[i];
      return obj;
    }, {});
    return input
      .split("")
      .map((char) => {
        if (encode) {
          if (encodeKeyMap[char]) {
            // If this object of encodeKeyMap {a:b} has the key of char, we want to push that to our array
            return encodeKeyMap[char];
          } else {
            return char;
          }
        }
        if (!encode) {
          if (decodeKeyMap[char]) {
            // If THIS object of decodeKeyMap {b:a} has the key of char, we want to push THIS to our array
            return decodeKeyMap[char];
          } else {
            return char;
          }
        }
      })
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
