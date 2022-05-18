function count_To_Ten() { //counting
    var Digit = "" ;
    var X = 1 ;
    while (X < 11) {
        Digit += "<br>" + X ;
        X++ ;
    }
    document.getElementById("Counting_to_Ten") .innerHTML = Digit;
}


let text = "Hello World!"; //determines the length of script
let length = text.length;
document.getElementById("script_string_length") .innerHTML = length;

var Food = ["Chicken", "Tortilla", "Yogurt", "Arugula", "Capers"] ; //loop in java script //
var Content = "" ;
var Y;
function for_loop() {
    for (Y = 0; Y < Food.length; Y++) {
        Content += Food[Y] + "<br>";
    }
    document.getElementById("List_of_food") .innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [] ;
    Cat_Picture[0] = "sleeping" ;
    Cat_Picture[1] = "playing" ;
    Cat_Picture[2] = "eating"

    document.getElementById("Array") .innerHTML = "In this picture, the cat is " + Cat_Picture[1] + ".";
}

function constant_function() { //creating a constant value - replaced $6200 w/$7500//
    const Midcentury_Furniture = {type:"lounge chair" , brand:"Eames", color:"black", price:"$6200"};
    Midcentury_Furniture.color = "white";
    Midcentury_Furniture.mfgyear = "1974"
    Midcentury_Furniture.price = "$7500";

    document.getElementById("Constant") .innerHTML = "The cost of the " +     Midcentury_Furniture.type + " is " +     Midcentury_Furniture.price;
}


var X = "<br>" + 55;
document.write(X);
{
    let X = 62;
    document.write("<br>" + X);
}
document.write("<br>" + X);


var X = 55;
document.write(X);
{
   var X = 62;
    document.write("<br>" + X);
}
document.write("<br>" + X);


document.getElementById("Return") .innerHTML = myFunction("Ushita");

function myFunction(name) {
  return "Hello " + name;
}


let vino = { //create an object using let 
    region: "French Appelation ", //properties
    grape: "Gamay grape ",
    year: "2004 ",
    palate: "tastes dry ",
    description : function() { // return method
        return "The wine is a " + this.region + this.grape + this.year + this.palate;
    }
};

{
document.getElementById("Wine_Object") .innerHTML = vino.description();
}

let brk = "";  //break statment used to jump out of loop // 
for (let i = 0; i < 10; i++) {
    if (i===3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Loop_break_statement") .innerHTML = text;

//continue 
let cont = "";  //a continue statment breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop // 
for (let i = 0; i < 10; i++) {
    if (i===3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Loop_continue_statement") .innerHTML = text;













