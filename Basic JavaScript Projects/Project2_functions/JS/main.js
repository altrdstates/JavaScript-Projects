var X= "Here's a pop up window!" //assigning a variable
window.alert(X);

document.write(X.fontcolor("red"));

var A= "and here is a special message," //assigning a variable
document.write(A);

var Y= "F"
var Z= "G"
var C= Y+Z //concatenating the two variables
document.write(C)

function My_First_Function() {  //Defining a function and naming it
    var str = "This is the button text!"; //Defiing a variable and giving it a string value
    document.getElementById("Button_Text") . innerHTML = str; //Putting the value of the variable into the HTML elementFROMPOINT with the "Button_Text" id
}

function myFunction() { //function name
    var sentence = "I am learning"; //variable is sentence
    sentence += " alot from this book!"; //variable operator
    document.getElementById("Concatenate") .innerHTML = sentence;
}