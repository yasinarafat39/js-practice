

// const rightDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
const myDate = new Date(2003, 6, 11);
console.log(myDate);


console.log(myDate.getDate()); // return current date of the day.
console.log(myDate.getDay()); // return index number of day. Day start from sunday which index number is 0. 
console.log(new Date().getFullYear()); // return current year 
console.log(new Date().getHours()); // return Current hours 1 to 24
console.log(new Date().getMilliseconds()); // Its return current Milliseconds 
console.log(new Date().getMinutes()); // Its return current minutes
console.log(new Date().getMonth()); // Its return index number of months. which start from 0 to 11. 0 is january and 11 is December.
console.log(new Date().getSeconds()); // return current second that running.
console.log(new Date().getTime()); // It's return current time in Milliseconds. which calculate from 1970. 
console.log(new Date().getTimezoneOffset()); // return the different between UTC(Universal Time Coordinated) and my Date() object in minutes.
                                            // if I stay front of the UTC I found negative values like(-360). 
console.log(myDate.getUTCDate()); // return index number of date which start from 0. If date of myDate() is 11 that's why it's return 10. Because, 10 means 11 that's match with our date 11.
console.log(myDate.getUTCDay()); // return index number 4 because If day index start from sunday(0) that's why sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4), friday(5), saturday(6).
