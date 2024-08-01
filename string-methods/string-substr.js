


// substr is similar to slice(). 
// the difference is that the second parameter is specifies the length of the extracted part. 
const fruits = "Apple, Banana, Kiwi";
const part = fruits.substr(7, 3);
console.log("part1:", part); // "Ban" 



// if you omit the second parameter, substr() will slice out of the rest of the string. 
const part2 = fruits.substr(7);
console.log("part2:", part2); // "Banana, Kiwi" 


// if the first parameter is negative, the position count from the end of the string. 
const part3 = fruits.substr(-4);
console.log("part3:", part3); // "Kiwi" 