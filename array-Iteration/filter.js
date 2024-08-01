


// The filter() method create a new array with elements that pass a test. 

// This example create new array from elements with a value larger than 18 
// filter return a new array. 

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, arrayItSelf) {
    return value > 18;
};

const result = numbers.filter(myFunction);
console.log(result); 