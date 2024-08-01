

// the match() method returns an array containing the results of matching a string against a string ( or a regular expression). 
let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match("ain"); // case-sensitive
console.log("myArr", myArr); // ["ain"] 


// if you search for global match 
const myGlobalArr = text.match(/ain/g); // case-sensitive
console.log("global match:", myGlobalArr); // [ 'ain', 'ain', 'ain' ]
console.log("global match length:", myGlobalArr.length); // 3


// perform a global, case-insensitive search for "ain": 
const caseInsensitiveSearch = text.match(/ain/gi); 
console.log("case-insensitive search:", caseInsensitiveSearch); // [ 'ain', 'AIN', 'ain', 'ain' ]
console.log("case-insensitive search array length:", caseInsensitiveSearch.length); // 4


