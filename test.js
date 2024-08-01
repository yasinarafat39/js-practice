
const text = "Apple, Banana, Kiwi";
const BananaPart = text.slice(7, 13);
console.log(BananaPart);


const date = new Date("2003-07-11");
console.log(date);






/*----------------------------------------------- */

// const products = [{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200 }, { name: 'Fresh Sugar', price: 300 }];

// function returnTotal(products) {

//     let total = 0;

//     products.forEach(function (product) {
//         console.log(product.price);
//         total += product.price;
//     });
//     return total;
// };

// console.log(returnTotal(products));

// function returnTotalBalance(products) {
//     let total = 0;

//     for (i = 0; i < products.length; i++) {
//         let product = products[i];
//         // console.log(product.name);
//         // console.log(product.price);
//         total += product.price;
//     };

//     return total;
// };

// console.log(returnTotalBalance(products));

/*----------------------------------------------- */













/*---------------- Delete an property from object-----------------*/

// const person = [
//     {
//         lname: 'John',
//     }, 'fname'
// ];


// function deleteProperty(arr) {
//     const firstElement = arr[0]; // first element of array which is object.

//     for (const propertyName in firstElement) {
//         // console.log(propertyName);

//         if (propertyName == arr[1]) {
//             // console.log("Mische");
//             // if (delete propertyName === true) {
//             //     return "YES";
//             // }

//             delete propertyName;
//             return "YES";

//         } else {
//             // console.log("Mische Na");
//             return "NO";
//         }
//     }

// };

// console.log(deleteProperty(person));

/*----------------------------------------------- */












/*---------------- Fahrenheit to Celcious converter */

// function fahrenheitToCelcious(valNum) {
//     const celcious = (valNum - 32) / 1.8;
//     const StringResult = celcious.toFixed(2);
//     const result = parseFloat(StringResult);
//     return result;
// }

// console.log(fahrenheitToCelcious(71));


/*----------------------------------------------*/











// /*------------------- Find The Average Mark -------------------*/

// const marks = [100, 100, 100, 100, 99]

// function findTheAverage(arrOfMarks) {
//     let total = 0;

//     for (let i = 0; i < arrOfMarks.length; i++) {
//         total += arrOfMarks[i];
//     }

//     const average = total / arrOfMarks.length;
//     const StringResult = average.toFixed(2);
//     const result = parseFloat(StringResult);
//     return result;
// };

// console.log(findTheAverage(marks));

/*---------------------------------------------------------------*/