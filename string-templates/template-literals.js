

// Back-Tics Syntax
// Template Literals use back-ticks(``) rather than the quotes("") to define a string: 
const text = `Hello World`;


// with Template Literals, you can use both single and double quotes inside a string: 
const text2 = `He's often called "Johnny"`;


// Template Literals allows multiline string: 
const text3 =
    `The quick
    brown fox
    jumps over
    the lazy dog`;





// Interpolation
// Template Literals provide an easy way to interpolate variable and expressions into strings.
// the method called string interpolation. 
const firstName = `Yasin`;
const lastName = `Arafat`;
const text4 = `Welcome ${firstName}, ${lastName}`;





// Template Literals allow expression in string: 
let price = 10;
let vat = 0.25;
let vatPrice = price * vat;
const total = `Total: ${price + vatPrice}`;
console.log(total);






// Template Literals allow HTML Template: 
let header = "Template Literals";
let tags = ["Template Literals", "Javascript", "es6"];

const html = `<h2>${header}</h2><ul>`;

for (let x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html);
document.getElementById("template_literals").innerHTML = html; 