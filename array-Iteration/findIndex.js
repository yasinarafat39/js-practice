
/*
    The findIndex() method returns the index of the first array element that passes a test function.
*/

const numbers = [4, 9, 16, 25, 29];

function myFunction(value, index, array) {
    return value > 18;
}

let position = numbers.findIndex(myFunction);

console.log(position); // 3 