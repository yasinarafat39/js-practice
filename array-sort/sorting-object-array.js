
const cars = [
    {
        type: "Volvo",
        year: 2016
    },
    {
        type: "Saab",
        year: 2001
    },
    {
        type: "BMW",
        year: 2010
    }
];


cars.sort(function (a, b) { return a.year - b.year }); // numerically( Lowest to Highest ) 
console.log(cars); /* 
    [
        { type: 'Saab', year: 2001 },
        { type: 'BMW', year: 2010 }, 
        { type: 'Volvo', year: 2016 }
    ]
*/

cars.sort(function (a, b) { return b.year - a.year }); // numerically( Highest to Lowest )
console.log(cars); /* 
    [
        { type: 'Volvo', year: 2016 },
        { type: 'BMW', year: 2010 },  
        { type: 'Saab', year: 2001 }  
    ]
*/


// Comparing string properties is a little more complex: 
function stringSort(arr) {
    arr.sort(function (a, b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });

    console.log(cars);/* 
    [
        { type: 'BMW', year: 2010 },  
        { type: 'Saab', year: 2001 }, 
        { type: 'Volvo', year: 2016 }
    ]
    */
}

stringSort(cars);

