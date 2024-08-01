
// The splice() method can be used to add new items to an array: 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

/* 
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

console.log(fruits); // [ 'Banana', 'Lemon', 'Kiwi', 'Orange', 'Apple', 'Mango' ]


const fruits1 = ["alo", "law", "KachaMorch", "fish"];
fruits1.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits1); // [ 'alo', 'law', 'Lemon', 'Kiwi', 'fish' ]



// Using splice() to Remove Elements

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(0, 1);
console.log(fruits4);