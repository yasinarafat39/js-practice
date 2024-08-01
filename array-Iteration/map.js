
/*
   The map() method creates a new array by performing a function on each array element.
   The map() method does not execute the function for array elements without values. 
   The map() method does not change the original array. 

   The map() method return a new array; 
*/

/*
   The function takes 3 arguments: 
   1. The item value
   2. The item index
   3. The array itself
*/

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, arrayItSelf) {
    return value * 2; // multiplication value by 2; 
};

const result = numbers.map(myFunction);
console.log(result); // [ 90, 8, 18, 32, 50 ]

