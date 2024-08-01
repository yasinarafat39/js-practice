
/*
    includes() method allow us to check an element is present to array(including NaN, unlike indexOf).

    includes() method returns only two result (true or false)  
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Mango")); // true 
console.log(fruits.includes("ango")); // false  