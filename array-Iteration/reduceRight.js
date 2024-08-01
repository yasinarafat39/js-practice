

const numbers = [45, 4, 9, 5, 8, 3, 2, 16, 25];


function myFunction(total, value, index, arrayItSelf) {
    console.log(`${total} + ${value} = ${total + value}`);
    console.log("---------------------");
    return total + value;
};

const sum = numbers.reduce(myFunction);
console.log(sum); 