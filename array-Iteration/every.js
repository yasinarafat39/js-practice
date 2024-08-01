

/* 
The every() method checks if all array values pass a test.    
*/

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
    return value < 50;
};

const allOver50 = numbers.every(myFunction);
console.log(allOver50); // true 