

// toExponential() returns a string, with a number rounded and written using exponential notation:

// parameters defines the number of characters behind the decimal point: 

let x = 9.656;
let y = x.toExponential(0); // 1e+1 
let k = x.toExponential(2); // 9.66e+0
let h = x.toExponential(4); // 9.6560e+0 
let d = x.toExponential(6); // 9.656000e+0 
console.log(d); 