document.write("10" + 5); //example of coercion -- the operands of the operator are different data types (e.g. stirng + number)
    document.write("<br>")  

document.write(typeof("Animal"))
    document.write("<br>")

document.write(typeof(5))
    document.write("<br>")

function my_Function() {
    document.getElementById("Test") .innerHTML = 0/0; //result is NaN -- you can't divide 0 by 0 
}

function my_Function2() {
    document.getElementById("Test2") .innerHTML = isNaN("This is a string"); //check if true 
}

function my_Function3() {
    document.getElementById("Test3") .innerHTML = isNaN("007"); //check if false
}

document.write(2E310); //output infinity
    document.write("<br>")


document.write(-3E310); // output -infinity
    document.write("<br>")

document.write(10 > 2); //true false statement
    document.write("<br>")
document.write(10 < 2); //true false statement
    document.write("<br>")
console.log(2 + 2); //console addition will output value

console.log(10 < 2); //console true/false

document.write(10 == 10); //is this true
    document.write("<br>")
document.write(3 == 11); //is this false
    document.write("<br>")

X = 10; //set variable
Y = 10; //set variable
document.write(X === Y); //compare if true
    document.write("<br>")

X = 82; //set variable
Y = "82"; //set variable
document.write(X === Y); //compare number and string / is it false
        document.write("<br>")

A = "Magnus"; //set variable
B = "Magnus"; //set variable
document.write(A === B); //compare string / is it true
        document.write("<br>")

document.write(5 > 2 && 10 > 4); //is it true or false && operator determines logic between values & variables
    document.write("<br>")

document.write(5 > 10 && 10 > 4); //is it true or false && operator determines logic between values & variables
    document.write("<br>")   

document.write(5 > 10 || 10 > 4); // || (or) operator is it true or false
    document.write("<br>")  

document.write(5 > 10 || 10 > 20); // || (or) operator is it true or false
    document.write("<br>") 
    
function not_Function() {
    document.getElementById("Not") .innerHTML = ! (20 > 10); //! (not) operator checks whether or not something is true. if false, it will output "true". this would return false
    }

function not_Function2() {
    document.getElementById("Not") .innerHTML = ! (5 > 10); //! (not) operator checks whether or not something is true. if false, it will output "true" but its a double negative so would say true
    }

