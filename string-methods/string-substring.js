

// substring if similar to slice(). 
// the different is that substring() cannot accept negative indexes. 
const fruits = "Apple, Banana, Kiwi";
const part = fruits.substring(7, 13);
console.log("part1:", part);


// if you omit the second parameters, substring() will slice out the rest of the string. 