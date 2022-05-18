var X = 10; //X is global variable because it's outside the function 
function Add_numbers_1() {
    document.write(20 + X + "<br>") ;
}
function Add_numbers_2() {
    document.write (X + 100);
}
document.write("<br>");

function Add_numbers_3() { //Y is local variable because it's within the context of the function 
    var Y = 5
    document.write (Y + 100);
}
Add_numbers_1() ;
Add_numbers_2() ;

document.write("<br>");

// the code above this break is an example of the scope of a global variable // global variables are declared outside of functions



/* function Add_numbers_1() {
    var X = 10;
    console.log(15 + X) ;
}
function Add_numbers_2() {
   console.log(X + 100) ;
} */
Add_numbers_1() ;
Add_numbers_2() ;
document.write("<br>");

// using the console.log method to debug code

function get_Date() {
    if (new Date() .getHours() < 18) { //if is a conditional statement date().getHours() method returns the specified date 
        document.getElementById("Greeting") .innerHTML = "How are you today?" ;
    }
}

document.write("<br>");

function Age_Function() {
    Age = document.getElementById("Age") .value;
    if (Age >=18) {
        Vote = "You are old enough to vote!" ;
    }
    else {  // else statement specifies a block of code that will be executed if the condition is false (opposite of the statment)
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?") .innerHTML = Vote ;
}

document.write("<br>");

function Collector_Function() {
    Cars = document.getElementById("Cars") .value;
    if (Cars >=4) {
        Vote = "Congratulations, you are definitely a car collector!" ;
    }
    else {  // else statement specifies a block of code that will be executed if the condition is false (opposite of the statment)
        Vote = "You're not necessarily conidered a collector, but keep up the good work!";
    }
    document.getElementById("Lets_see_if_you_are_a_collector?") .innerHTML = Vote ;
}

function Time_function() {
    var Time = new Date() .getHours() ;
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time! ";
    }
else if (Time >=12 == Time < 18) {
        Reply = "It is afternoon. ";
}
document.getElementById("Time_of_day") .innerHTML = Reply;
// "else if" statement specifies is executed if the "if" statement is found to be false
}