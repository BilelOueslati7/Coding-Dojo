// ===== Function ===== 


// create the function 
function greet(){
 // console.log("Hello")
    return "Hello"
}

// call the function / Invoke
var out = greet()// Hello
// console.log(out) // Hello


// A Function With Param



function greetPerson (person){
    if (person == "Si kamel"){
        return "Hello " + person
    }
    return "🙄" + person
}

// console.log(greetPerson("Wael"))
// var person = "Wael"
// console.log(greetPerson("Iheb"))
// console.log(greetPerson("Si kamel"))

// console.log(greetPerson("Yassin"))

var animals = ['Red Panda', 'Elephant', 'Koala', 'Bear'];

function findTheKoala (animals){
var koala 
    for(var i = 0;i<= animals.length-1;i++){
        // console.log(animals[i]);
        if(animals[i] == 'Koala'){
            koala = animals[i]
        }else {
            console.log("this is not koala " + animals[i])
        }
    }
    return   "I found it yeeeey " +koala
}
console.log(findTheKoala(animals))