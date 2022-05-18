function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride."; //ternary is made up of 3 parts. used to assign a value to a variable based on a condition. also referred to as a conditional operator
}

function Vehicle(Make, Model, Year, Color) { // "this keyword in html doc is used to create an object "Vehicle()" is the obstructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", 'Viper', 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function count_Function() {
    document .getElementById("Counting") .innerHTML = Count ();
    function Count () {
        var Starting_point = 9
        function Plus_one() {Starting_point += 1;}
        Plus_one() ;
        return Starting_point;
    }
}

function myFunction2() {
    var X = new Vehicle ("Ford", "Pinto", 1978, "Red");
        document.getElementById("New_and_This").innerHTML = X.Vehicle_Make+X.Vehicle_Model+X.Vehicle_Color+X.Vehicle_Year;
          // this function says that the variable object is the vehicle with. this calls out what "this" is

}

    function Nested_Function() {
        document .getElementById("Nested") .innerHTML = Count ();
        function Count () {
            var Starting_point = 12
            function Plus_one() {Starting_point += 1;}
            Plus_one() ;
            return Starting_point;
            // "a nested function. this is a program with other sets of instructions. the starting point is instructed to add 1 to the output
        }
    }