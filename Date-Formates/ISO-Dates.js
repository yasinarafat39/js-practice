

/*
    ISO 8601 is the International standard for the representation of dates and times.
    The ISO 8601 syntax (YYYY-MM-DD) is also the preferred javaScript date format.
*/

new Date("2022-12-28"); // Wed Dec 28 2022 06:00:00 GMT+0600 (Bangladesh Standard Time)



/*

    ----------------- ISO Dates (Year and Month) ------------------------ 
    ISO Date can be written without specifying the day (YYYY-MM): 
    const d = new Date("2015-03"); 

*/


/*

    ----------------- ISO Dates (Year) ------------------------ 
    ISO Date can be written without specifying the day & month (YYYY): 
    const d = new Date("2015"); 

*/


/*

    ----------------- ISO Dates (Date-Time) ------------------------ 
    ISO Date can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH-MM-SSZ): 
    
    const d = new Date("2015-05-25T06:00:03Z"); 

    Date and Time is separated with a capital T. 
    UTC time is defined with a capital letter Z. 
*/


