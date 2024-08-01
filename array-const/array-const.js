



/*

    In 2015, Javascript introduced an important new keyword "const". 
    It has become a common practice to declare arrays using const. 

*/


/*
    ----------------------Cannot be Reassigned-----------------------
    An array declared with const cannot be reassigned. 

    const cars = ["Saab", "Volvo", "BMW"];
        cars = ["Toyota", "Volvo", "Audi"];  // ERROR


    ------------------------- Elements Can be Reassigned --------------------
    You can change the elements of a constant array: 
    
    // You can create a constant array:
    const cars = ["Saab", "Volvo", "BMW"];

    // You can change an element:
    cars[0] = "Toyota";

    // You can add an element:
    cars.push("Audi");

*/


/*
    ---------------------------------- Assigned when Declared -----------------
    Javascript const variable must be assigned a value when they are declared:
    Meaning: An array declared with const must be initialized when it is declared.

    using const without initializing the array is an syntax error: 


    This will not work:

    const cars;
    cars = ["Saab", "Volvo", "BMW"];

*/


/*
    ----------------- Arrays declared with var can be initialized at any time ------------------

    array declared with var can be initialized at any time. 
    You can even use the array before it is declared. 


    This is OK:

    cars = ["Saab", "Volvo", "BMW"];
    var cars;
*/

/*
    -------------------------- Const Block Scope ------------------------------

    An array declared with const has Block Scope. 
    An array declared in a block scope is not the same as an array declared outside the block: 

    const cars = ["Saab", "Volvo", "BMW"];
    // Here cars[0] is "Saab"

    {
        const cars = ["Toyota", "Volvo", "BMW"];
        // Here cars[0] is "Toyota"
    }

    // Here cars[0] is "Saab"
*/


/*
    -------------------------- An array declared with var does not have block scope ---------------

    var cars = ["Saab", "Volvo", "BMW"];
    // Here cars[0] is "Saab"

    {
        var cars = ["Toyota", "Volvo", "BMW"];
        // Here cars[0] is "Toyota"
    }

    // Here cars[0] is "Toyota"
*/


/*
    ---------------------------- Redeclaring an array declared with var is allowed -----------------

    var cars = ["Volvo", "BMW"];   // Allowed
    var cars = ["Toyota", "BMW"];  // Allowed
    cars = ["Volvo", "Saab"];      // Allowed

*/

/*
    --------- Redeclaring or reassigning an array to const, in the same scope or same block is not allowed---------

    var cars = ["Volvo", "BMW"];     // Allowed
    const cars = ["Volvo", "BMW"];   // Not allowed
    
    {
        var cars = ["Volvo", "BMW"];   // Allowed
        const cars = ["Volvo", "BMW"]; // Not allowed
    }
*/


/*
    --------- Redeclaring or reassigning an existing const array, in the same scope or same block is not allowed---------


    const cars = ["Volvo", "BMW"];   // Allowed
    const cars = ["Volvo", "BMW"];   // Not allowed
    var cars = ["Volvo", "BMW"];     // Not allowed
    cars = ["Volvo", "BMW"];         // Not allowed

    {
        const cars = ["Volvo", "BMW"]; // Allowed
        const cars = ["Volvo", "BMW"]; // Not allowed
        var cars = ["Volvo", "BMW"];   // Not allowed
        cars = ["Volvo", "BMW"];       // Not allowed
    }
     
*/


/*
    ----------- Redeclaring an array with const, in another scope, or in another block is allowed----------

    const cars = ["Volvo", "BMW"];   // Allowed
    {
        const cars = ["Volvo", "BMW"]; // Allowed
    }
    {
        const cars = ["Volvo", "BMW"]; // Allowed
    }   

*/

