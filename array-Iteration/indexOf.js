

/*
    The indexOf() method searches an array for an element value and return it's position.
*/

const fruits = ["Apple", "Orange", "Apple", "Mango"];

let position = fruits.indexOf("Apple");
console.log(position); // 0 


/*
    Array.indexOf() returns -1 if the item is not found. 

    If the item is present more than once, it returns the position of the first occurrences. 
*/