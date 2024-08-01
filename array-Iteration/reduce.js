
/*
    The reduce method() runs a function on each array element to produce (reduce it to) a single value; 
    The reduce method() works from left-to-right in the array.

    The reduce method() method does not reduce the original array. 
*/


/*

    Note that the function takes 4 arguments: 

        1) The total(the initial value / previous return value)
        2) The item value
        3) The item index
        4) The array itself

*/

const numbers = [45, 4, 9, 5, 8, 3, 2, 16, 25];


function myFunction(total, value, index, arrayItSelf) {

    if (value < 10) {
        console.log("kaj kortase");
        console.log(`${total} + ${value} = ${total + value}`);
        console.log("------------");
        return total + value;
    }

};

const sum = numbers.reduce(myFunction);
console.log(sum); 