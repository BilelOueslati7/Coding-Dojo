function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();  // I was born in 1980


function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980); //I was born in 1980



function add(num1, num2){
    console.log("Summing Numbers!"); //Summing Numbers
    console.log("num1 is: " + num1); //num1 is 10
    console.log("num2 is: " + num2);// nume2 is 20
    var sum = num1 + num2;
    console.log(sum);//30
}
add(10, 20);
