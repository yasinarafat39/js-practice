
// Number.parseFloat() methods converts strings to number: 

// spaces are allowed. Only the first number is returned: 
console.log(Number.parseFloat("10")); // 10 
console.log(Number.parseFloat("10.33")); // 10.33
console.log(Number.parseFloat("10 33 40")); // 10
console.log(Number.parseFloat("10 year")); // 10 
console.log(Number.parseFloat("year 10")); // NaN(Not a Number) 


// If the number cannot be converted, NaN(Not a Number)  
