
// the padStart() method pads a string from the start. 
// It pads a string with another string (multiple times) until it reaches a given length. 
let text = "5";
let text2 = text.padStart(7, "0");
console.log(text2); // 00000005 


// the padEnd() method pads a string from the end. 
let text3 = text.padEnd(7, "x");
console.log(text3); // 5xxxxxxx 


