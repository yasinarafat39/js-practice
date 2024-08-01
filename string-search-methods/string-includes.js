
// The includes methods returns true if a string contains a specified value: 
const text = "Hello World! welcome to universe";
const includingWorld = text.includes("World");
console.log("includingWorld:", includingWorld); // true 


// Check if a string includes "world". start at position 12 : 
const including = text.includes("World", 12);
console.log("from position 12:", including);


// includes is case-sensitive
