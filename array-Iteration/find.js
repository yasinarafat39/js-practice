

/*
    The find() method returns the value of the first array element that passes a test function. 
*/

const numbers = [4, 9, 16, 25, 29];

function myFunction(value, index, array) {
    return value > 18;
}

let position = numbers.find(myFunction);

console.log(position); // 25 