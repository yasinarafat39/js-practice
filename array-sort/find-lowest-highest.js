
// There are no build-in function for finding the max or min value in an array: 


// sorting ascending: (lowest to highest)  
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });

console.log(points[0]); // 1 (The lowest)
console.log(points[points.length - 1]); // 100 (The highest)



// sorting descending: (highest to lowest)
const result = [45, 65, 62, 489, 5684, 52, 67, 49];
result.sort(function (a, b) { return b - a });

console.log(result[0]); // 5684 (The highest)
console.log(result[result.length - 1]); // 45 (The lowest)

