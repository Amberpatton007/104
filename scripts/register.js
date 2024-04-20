let petSalon = {

    name: "Fur Baby Beauty Salon",
    phone: "999-999-9999",
    adress: {
        country:"US",
        city:"San Francisco",
        zipCode:"12345",
    },
    pets:[]
}

//constructor i.e. Bluprint//
function Pet(name,age,gender,breed,service){
    //attributes-parameter//
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function isValid(pet){
    let validation=true; //we are fine

    if(pet.name==""){
        validation=false;
        alert("please add pet name");
    }

    if(pet.service==""){
        validation=false;
        alert("please choose a service")
    }

    return validation; //returning the result of the validation
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;
    
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    
    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        console.log(newPet);
    }
}


function init(){
    let pet1 = new Pet("Rogue", 2, "female","Maltipoo", "bath");
    petSalon.pets.push(pet1);
    console.log(pet1);
}

window.onload=init; //wait to render the HTML, then load the init//

//let pet1 = new Pet("Scooby",99,"Great Dane","Ear cleaning");

//console.log(pet1)

//clear the form .value//