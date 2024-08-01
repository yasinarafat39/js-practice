

// the trim() methods removes whitespace from both sides of a string: 
const text1 = "      Hello World      ";
const text2 = text1.trim();

console.log("text1Length:", text1.length);
console.log("text2Length:", text2.length);


// the trimStart() method work like trim(), but removes whitespace only from the start of a string: 
// trimStart() & trimEnd methods added to JavaScript from ECMAscript 2019. 
const text3 = text1.trimStart();
console.log("text3:", text3);


// the trimEnd() method work like trim(), but removes whitespace only from the end of a string. 
const text4 = text1.trimEnd();
console.log("text4:", text4);


