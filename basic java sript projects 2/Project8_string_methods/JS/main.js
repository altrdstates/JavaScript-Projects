function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy" ;
    var Section = Sentence.slice(27 , 33) ;
    document.getElementById("Slice") .innerHTML = Section;
    // slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string.
}
{
 let text = "Hello, World!";
 let result = text.toUpperCase();
 document.getElementById('demo') .innerHTML = result;
 //UpperCase()converts a string to uppercase letters
}

{
    function search_Method() {
    let text = "Mr. Blue has a green kitten"
    let position = text.search("green");
    document.getElementById("demo2") .innerHTML = position;
    //search() searches for a string for a value & returns the position for the first match
   }
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string") .innerHTML = X.toString() ;
    // there are several types of numbers(). This is the "toString()" method, which returns a # as a string
}

function precision_Method() {
    var X = 12938.301559985849035840958;
    document.getElementById("Precision") .innerHTML = X.toPrecision(10) ;
    // toPrecision() formats a number to a specified length
}

{
let num = 5.56789;
let n = num.toFixed(2);
document.getElementById("fixed").innerHTML = n;
 // Fixed() converts a number to a string, rounded to a specified number of decimals
}

{
 let text = "valueOf";
 let result = text.valueOf();
 document.getElementById("value") .innerHTML = result;
  // valueOf() returns the primitive value of a string
}


