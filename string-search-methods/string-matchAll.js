

// The matchAll() method returns an iterator containing the results of matching a string against a string (or regular expression). 

const text = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = text.matchAll("Cats");
// console.log("iterator:", Array.from(iterator));


// if you want to search case insensitive, the insensitive flag (i) must be set: 
const iterator2 = text.matchAll(/cats/gi);
console.log("iterator2:", Array.from(iterator2)); 

console.log(iterator2);