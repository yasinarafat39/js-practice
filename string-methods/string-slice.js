


// slice() extracts a part of a string and return the extracted part in a new string. 
// the method takes 2 parameters: start position, and end position(end not included). 
const fruits = "Apple, Banana, Kiwi";
const part = fruits.slice(7, 13);
console.log("part1:", part); // "Banana"


// if you omit the second parameter, the method will slice out the rest of the string: 
const part2 = fruits.slice(7);
console.log("part2:", part2); // "Banana, Kiwi"


// if a parameter is negative, the position is counted from the end of the string: 
const part3 = fruits.slice(-12);
console.log("part3:", part3); // "Banana, Kiwi"
 

// this example slice out a portion of a sting from position -12 to -6. 
const part4 = fruits.slice(-12, -6);
console.log("part4:", part4); // "Banana" 