// ======= FOR LOOP =======

// In Jvascript , a "Foor loop" helps you perform many tasks repetedly.

/// General Syntax
// 3S
// Start ==  Intialition
// Stop == Condition 
// Steps == Final Expression


// Recipe

// for(start;stop;stpes){

// }

// create a loop that goes from 1 to 10 

// for(var a = 1;a<=10;a++){
//     console.log(a);
// }

// i++ 
// i = + 1
// i+= 1
//for ()

var animals = ['Red Panda', 'Elephant', 'Koala', 'Bear'];



// for(var i = 0;i<= animals.length-1;i++){
//     console.log(animals[i]);
// }

for(var i = 0;i<= animals.length-1;i++){
    // console.log(animals[i]);
    if(animals[i] == 'Koala'){
        console.log("I found it yeeeey " + animals[i])
    }else {
        console.log("this is not koala " + animals[i])
    }
}

/* ------------------ group activity -----------

    write a for-loop that starts at year 1996 and ends in 2023
    on every year (iteration) have it log the year and the string "JS is awesome!"
    on every 10 years, log "happy decade of JS!"
    when you reach the end, log "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

    ex. "1996 JS is awesome"
        "1997 JS is awesome"
        ...
        "2004 JS is awesome"
        "2005 JS is awesome"
        "happy decade of JS!"
        "2007 JS is awesome"
        ....
        "2022 JS is awesome"
        "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

 */

