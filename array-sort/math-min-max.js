

const result = [45, 65, 62, 489, 5684, 52, 67, 49];
let maximumNumber = Math.max.apply(null, result);

console.log(maximumNumber); // 5684 



let minimumNumber = Math.min.apply(null, result);
console.log(minimumNumber); // 49 