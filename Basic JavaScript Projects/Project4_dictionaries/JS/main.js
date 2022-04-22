function my_Dictionary() { //define function
    var Animal = {     //assign variable
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark!"
    };

    delete Animal.Age;  //delete operator

    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
