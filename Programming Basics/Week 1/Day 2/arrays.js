// ARRAYS 

var test = "exmple1  exmple2 exmple3";

/// array allow us to group related data with each other
// they are built with square brackets []
// the data inside of the arrays are called "element"
// we seperate elemnts with comma ','

// Example
// index           0            1            2           3
var animalArray = ["dog 🐕‍🦺", "giraffe 🦒", "lion 🦁", "zebra 🦓"]
console.log(animalArray)
console.log(animalArray[2])
console.log(animalArray[animalArray.length - 1])

// In Javascript, we can have diffrent datatypes inside an array 
var diffArray = ["dog 🐕‍🦺",44,["ggg",false],{key:"value"},true,];
// first step is accessing the value in the outer array ,
// then the seconde step is accessing the value of the inner array
console.log(diffArray[2][1])

// How do we add things and remove things from the array 

// add element
var newAnimal = "cat 🐈‍⬛";
animalArray.push(newAnimal)
console.log(animalArray)

// delete element
animalArray.pop()

// how we change a elemnt in the array ?
// access the elemnt by the index and use the asssigment operator(=)
animalArray[5] = newAnimal



















































// comment this line 

// CTRL + /
// this is for sigle line 

/* this 
is 
multiple 
line 
*/ 