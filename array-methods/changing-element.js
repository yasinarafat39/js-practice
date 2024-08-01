
// Array elements are accessed using their index number. 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits); // ["Kiwi", "Orange", "Apple", "Mango"]

fruits[fruits.length] = "Aramko"; // add `Aramko` as a last element 
console.log(fruits); // ["Kiwi", "Orange", "Apple", "Aramko"] 

fruits[fruits.length - 1] = "Strawberry"; // Change `Aramko` to `Strawberry` of last element
console.log(fruits); // ["Kiwi", "Orange", "Apple", "Mango", "Strawberry"] 
