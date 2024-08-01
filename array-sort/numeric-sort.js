
// 
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b }); // [ 1, 5, 10, 25, 40, 100 ]



// use the same trick to sort an array descending order: 
const result = [40, 100, 1, 5, 25, 10];
result.sort(function (a, b) { return b - a }); // [ 100, 40, 25, 10, 5, 1 ]

console.log(points); // [ 1, 5, 10, 25, 40, 100 ] 



const examResult = [40, 100, 1, 5, 20, 25, 10];
document.getElementById("demo").innerHTML = examResult;


function alphabeticallySort() {
    examResult.sort();
    document.getElementById("result").innerHTML = `
    Alphabetically: ${examResult}
    `;
}

function numericallySort() {
    examResult.sort(function (a, b) { return a - b });
    document.getElementById("result").innerHTML = `
    Numerically: ${examResult}
    `;
}
