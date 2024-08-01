

// the replace() method replaces a specified value with another value in a string. 

// the replace() method does not change the string it is called on.  
// the replace() method return a new string. 
// the replace() method replaces "only first match". 
let text = "please visit Microsoft and Microsoft is a big company";
let newText = text.replace("Microsoft", "easin-arafat.netlify.com");
console.log("text:", text);
console.log("newText:", newText);



// the replace all matches, use a regular expression with a /g flag (global match)
let newText2 = text.replace(/Microsoft/g, "easin-arafat.netlify.com");
console.log("newText2:", newText2); 