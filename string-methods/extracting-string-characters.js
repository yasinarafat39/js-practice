
// there are 3 methods for extracting string characters:

// 1. charAt(position)
// 2. charCodeAt(position)
// 3. property access []



// the charAt() method returns the character at a specified index (position) in a string: 
const text = "Yasin Arafat";
const char = text.charAt(0);
console.log(char); // "Y"


// the charCodeAt() method returns the unicode of the at a specified index in a string: 
const charCode = text.charCodeAt(0);
console.log(charCode);


// ECMAScript 5 (2009) allows property access [] on strings. 
const char2 = text[4];
console.log(char2); //"n" 