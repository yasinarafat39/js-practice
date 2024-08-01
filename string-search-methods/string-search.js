
// the search() methods searches a string for a string and returns the position of the match. 
const text = "Please locate where 'locate' occurs";
const index = text.search("locate");
console.log(index); // 7  


// Powerful search (regular expressions) 
const index2 = text.search(/locate/); 
console.log("index2:", index2);


// the search() method cannot take a second start position argument.