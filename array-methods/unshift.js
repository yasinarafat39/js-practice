
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.

// The unshift() method returns the new array length. 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let unshifted = fruits.unshift("Kiwi");
console.log(unshifted); // 5
console.log(fruits); // [ 'Kiwi', 'Orange', 'Apple', 'Mango', ]
