

// The concat() method creates a new array by merging (concatenating) existing array. 

// The concat() method does not change the existing array, it's always return the new array. 
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']


// The concat() method can take any number of array arguments: 
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3); //  ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']


// The concat() method can also take string as arguments: 
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren2 = arr1.concat("Peter"); // ['Emil', 'Tobias', 'Linus', 'Peter']
