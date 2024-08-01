
// the lastIndexOf() methods returns the index of the last occurrence of a specified text in a string. 
// Both indexOf(), and lastIndexOf() return -1 if the text is not found. 
const text = "Please locate where 'locate' occurs";
const lastIndex = text.lastIndexOf("locate");
console.log("lastIndex:", lastIndex); // 21 



// Both indexOf(), and lastIndexOf() methods accept a second parameter as the starting position for the search: 1
const lastIndex2 = text.lastIndexOf("locate", 15);
console.log("lastIndex2:", lastIndex2); // 7