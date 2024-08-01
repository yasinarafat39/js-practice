
// Number.parseInt() parses a string and returns a whole number.

// spaces are allowed. ony the first number returned: 
console.log(Number.parseInt("-10")); // -10 
console.log(Number.parseInt("-10.33")); // -10 
console.log(Number.parseInt("10")); // 10 
console.log(Number.parseInt("10.33")); // 10 
console.log(Number.parseInt("10 6")); // 10 
console.log(Number.parseInt("10 year")); // 10 
console.log(Number.parseInt("year 10")); // NaN (Not a Number) 


// if the number cannot be converted, NaN(Not a Number) is returned. 