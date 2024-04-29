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
function Pet(name,age,gender,breed,typeofpet,service){
    //attributes-parameter//
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.typeofpet=typeofpet;
    this.service=service;
}

function isValid(pet){
    let validation=true; //we are fine
    if(pet.name==""){
        validation=false;
        showNotification("please add pet name");
    }


    if(pet.service==""){
        validation=false;
        showNotification("please choose a service")
    }

    return validation; //returning the result of the validation
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputtypeofpet = document.getElementById("txttypeofpet").value;
    let inputService = document.getElementById("txtService").value;
    
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputtypeofpet,inputService);
    
    if(isValid(newPet)==true){
        petSalon.pets.push(newPet); 
        displayRow();
        //displayServiceCount();
        //showNotificiation("Successfully registered", "Success");
        console.log(petSalon.pets); //displaying the pets array
    }
}

function deletePet(petID){
    console.log("Deleting pet ..." + petID);
    document.getElementById(petID).remove();
    petSalon.pets.splice(petID, 1);
    displayRow();
    displayServiceCount();
    showNotification("The pet has been deleted", "Error");

}

function init(){
    let pet1 = new Pet("Rogue", 2, "female","Maltipoo","dog","baths");
    let pet2 = new Pet("Storm",3,"female","german shephard/beagle mix","dog","nailtrimmings");
    let pet3 = new Pet("Lucky", 4,"male","Angora","bunny","baths");
    let pet4 = new Pet("Sheba",13,"female","tabby","cat","demattings");
    petSalon.pets.push(pet1,pet2,pet3,pet4);


    //displayCard()
    displayRow();
    displayServiceCount();
}

window.onload=init; //wait to render the HTML, then load the init//

//let pet1 = new Pet("Scooby",99,"Great Dane","Ear cleaning");

//console.log(pet1)

//clear the form .value//