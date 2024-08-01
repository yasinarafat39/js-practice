

/*
The forEach() method calls a function (a callback function) once for each array element.

*/

/*
   The function takes 3 arguments: 
   1. The item value
   2. The item index
   3. The array itself
*/


const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, arrayItSelf) {
    console.log("value:", value);
    console.log("index:", index);
    console.log("arrayItSelf:", arrayItSelf);
    console.log("---------------------------------------------");
};

numbers.forEach(myFunction);

/*

value: 45
index: 0
arrayItSelf: [ 45, 4, 9, 16, 25 ]
---------------------------------------------
value: 4
index: 1
arrayItSelf: [ 45, 4, 9, 16, 25 ]
---------------------------------------------
value: 9
index: 2
arrayItSelf: [ 45, 4, 9, 16, 25 ]
---------------------------------------------
value: 16
index: 3
arrayItSelf: [ 45, 4, 9, 16, 25 ]
---------------------------------------------
value: 25
index: 4
arrayItSelf: [ 45, 4, 9, 16, 25 ]

*/