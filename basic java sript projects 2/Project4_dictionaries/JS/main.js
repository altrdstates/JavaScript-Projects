function my_Dictionary() { //define function
    var Animal = {     //assign variable
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark!"
    };

    delete Animal.Age;  //delete this property

    document.getElementById("Dictionary").innerHTML = Animal.Age; // function will try to print out the dictionary element that was deleted, because it's deleted will output as undefined //
}
