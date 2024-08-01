

// Shifting is equivalent to popping, but working on the first instead of the last.

// The shift() method removes the first array element and "shifts" all other elements to a lower index. 

// The shift() method return value that "shifted out".

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let shifted_out = fruits.shift();
console.log(shifted_out); // "Banana"
console.log(fruits); // [ 'Orange', 'Apple', 'Mango', ] 
